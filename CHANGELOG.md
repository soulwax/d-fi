# Changelog

## 1.1.0 - 2026-04-01

### Changed

- Updated the CLI package to depend on the scoped core library package `@soulwax/d-fi-core`.
- Updated runtime and test imports to use the scoped core package name consistently.

### Fixed

- Removed the last documentation link that still pointed at the old `d-fi/d-fi-core` repository path.
- Prepared the CLI package for the next scoped publish line without reintroducing the old unscoped dependency tree.
- Corrected the npm license metadata to use a valid `SEE LICENSE IN LICENSE` expression.

## 1.0.6 - 2026-03-26

### Changed

- Updated npm package metadata to use the GitHub repository at `https://github.com/soulwax/d-fi`.
- Limited the published npm package contents to runtime artifacts and release metadata.
- Updated README and docs links to use the current GitHub repository URLs.

### Fixed

- Corrected the repository URLs used in the README and CLI output.
- Fixed the auto-updater release API endpoint to target `soulwax/d-fi` on GitHub.
- Corrected npm and yarn install/update instructions to use the scoped package name `@soulwax/d-fi`.
- Made the test runner Windows-safe without adding dependencies.
