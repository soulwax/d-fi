# @soulwax/d-fi

<img src="https://raw.githubusercontent.com/soulwax/d-fi/main/.github/assets/logo.png" alt="d-fi logo" width="200" height="200" style="display: block; margin-left: auto; margin-right: auto;" />

> A crucial component of darkfloor streaming service systems.
> Source repository: https://github.com/soulwax/d-fi

![Screenshot](https://raw.githubusercontent.com/soulwax/d-fi/main/.github/assets/screenshot.png)

**d-fi is a program for downloading music from streaming music services. Remember that the artists and studios put a lot of work into making music - purchase the original music to support them.**

## v2 Migration Guide

Please read [here](https://github.com/soulwax/d-fi/blob/main/docs/migration_v2.md) before contributing to the v2 branch.

## Features

- _Supports downloading tracks, albums, artists, and playlists_
- _Allows music quality selection (**128 kbps**, **320 kbps** and **FLAC**)_
- _Auto tagging **MP3** & **FLAC** (including album cover and lyrics)_
- _Support downloading from both links and via searching_

## Supported Sites

### _Deezer_, _Spotify_ and _Tidal_

- _Tracks_
- _Albums_
- _Audiobook_
- _Playlists_
- _Artists_

> Note that Spotify and Tidal tracks will be sourced from Deezer using ISRC matching and UPC for albums. Also Spotify artist tracks are limited upto 10 items.

## Install

### _Method 1_

First install `nodejs` following [this tutorial](https://nodejs.org/en/download/package-manager/)

Once `nodejs` installation is complete run this command.

    npm i -g @soulwax/d-fi # may require sudo on linux and macOS

or if you are using yarn

    yarn global add @soulwax/d-fi

or pnpm

    pnpm add -g @soulwax/d-fi

Now you can run using command `d-fi` to start.

### _Method 2_

Download pre-built binary from [here](https://github.com/soulwax/d-fi/releases) and then double click on Windows to run. For Linux and macOS user, first open your choice of terminal and the execute with `./d-fi`

## CLI Parameters

All options are optional. You can suppress prompts via providing `quality` and `url` if you are using scripts. You can also use config file. Read the docs [here](https://github.com/soulwax/d-fi/blob/main/docs/config.md) for more info.

| Parameter             |      Short      |                                                    Supported values                                                     |                                                                  Description                                                                  |
| :-------------------- | :-------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| `--quality`           |      `-q`       |                                                      128/320/flac                                                       |                                                     The quality of the files to download                                                      |
| `--output`            |      `-o`       | Output file format according to `saveLayout`. See more [here](https://github.com/soulwax/d-fi/blob/main/docs/config.md) |                                                       The path to download the files to                                                       |
| `--url`               | `-u or nothing` |                                             album/artist/playlist/track url                                             |                                                              Downloads from url                                                               |
| `--input-file`        |      `-i`       |                          Downloads all urls listed in text file. Example: `d-fi -i links.txt`                           |                                                              Downloads from url                                                               |
| `--concurrency`       |  `-c` 1 to 50   |                                               Downloads X songs at a time                                               |                                                                                                                                               |
| `--set-arl`           |      `-a`       |                                                      `arl` string                                                       |                                                                Set arl cookies                                                                |
| `--headless`          |      `-d`       |                                                        _Nothing_                                                        | Run in headless mode. You must provide both `--url` and `--quality` if you run in headless mode. This mode is meant for scripting automation. |
| `--resolve-full-path` |     `-rfp`      |                                                        _Nothing_                                                        |                                               Create playlist file with absolute path location                                                |
| `--create-playlist`   |      `-cp`      |                                                        _Nothing_                                                        |                                                    Create playlist for albums and artists                                                     |
| `--config-file`       |     `-conf`     |                               Config location. Example: `d-fi -conf my-d-fi.config.json`                                |                                                    Specify custom location to config file                                                     |
| `--update`            |      `-U`       |                                                        _Nothing_                                                        |                                                       Download new update (binary only)                                                       |
| `--help`              |      `-h`       |                                                        _Nothing_                                                        |                                                              Shows the CLI help                                                               |

## Search Parameters

|   Prefix    |   Description   |
| :---------: | :-------------: |
|  `artist:`  |  Search artist  |
|  `album:`   |  Search album   |
| `playlist:` | Search playlist |

### Disclaimer

> I am not responsible in any way for the usage of others.

---

> Made with :heart: & :coffee: by the Bluesix Team. If you want to contribute, please read the [contributing guidelines](.github/CONTRIBUTING.md) first.

### License

Copyright © 2026 Christian Kling, Saskia Falkenhagen, Jens Arnolds
