import crypto from 'crypto';
import {Blowfish} from 'egoroof-blowfish';

const md5 = (data: string, type: crypto.Encoding = 'ascii') => {
  const md5sum = crypto.createHash('md5');
  md5sum.update(data.toString(), type);
  return md5sum.digest('hex');
};

const getBlowfishKey = (trackId: string) => {
  const SECRET = 'g4el58wc0zvf9na1';
  const idMd5 = md5(trackId);
  let bfKey = '';
  for (let i = 0; i < 16; i++) {
    bfKey += String.fromCharCode(idMd5.charCodeAt(i) ^ idMd5.charCodeAt(i + 16) ^ SECRET.charCodeAt(i));
  }
  return bfKey;
};

const decryptChunk = (chunk: Buffer, blowFishKey: string) => {
  const bf = new Blowfish(blowFishKey, Blowfish.MODE.CBC, Blowfish.PADDING.NULL);
  bf.setIv(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]));
  const decrypted = bf.decode(new Uint8Array(chunk));
  return Buffer.from(decrypted).toString('binary');
};

/**
 * Decrypt downloaded audio file
 * @param source Downloaded song buffer from getTrackDownloadUrl
 * @param trackId Song ID as string (SNG_ID)
 */
export const decryptDownload = (source: Buffer, trackId: string) => {
  const chunkSize = 2048;
  const blowFishKey = getBlowfishKey(trackId);
  let i = 0;
  let position = 0;

  const destBuffer = Buffer.alloc(source.length);
  destBuffer.fill(0);

  while (position < source.length) {
    const chunk = Buffer.alloc(chunkSize);
    const size = source.length - position;
    const currentChunkSize = size >= 2048 ? 2048 : size;

    let chunkString;
    chunk.fill(0);
    source.copy(chunk, 0, position, position + currentChunkSize);

    if (i % 3 > 0 || currentChunkSize < 2048) {
      chunkString = chunk.toString('binary');
    } else {
      chunkString = decryptChunk(chunk, blowFishKey);
    }

    destBuffer.write(chunkString, position, chunkString.length, 'binary');
    position += currentChunkSize;
    i++;
  }

  return destBuffer;
};
