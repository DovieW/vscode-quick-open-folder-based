# Quick Open Folder Based

A VS Code extension which makes the Quick Open (Ctrl + P) search scope itself to the folder of the currently opened file by prepopulating the field with the folder.

## Features

- When you press `Ctrl+P` (or `Cmd+P` on Mac) in a **multi-root workspace** (workspace with more than one folder), the Quick Open dialog opens with the folder path of the currently active file prepopulated (e.g., `app/`)
- This overrides VS Code's "Quick Open preserve input" setting when the prepopulated folder differs from what would have been preserved
- In single-folder workspaces or when no workspace is open, the extension falls back to normal Quick Open behavior

## Usage

Simply press `Ctrl+P` (or `Cmd+P` on Mac) while editing a file in a multi-root workspace. The Quick Open dialog will open with the file's folder path already filled in, allowing you to quickly search for files within the same folder.

## Example

If you're editing a file at `src/components/Button.tsx` in a multi-root workspace, pressing `Ctrl+P` will open Quick Open with `src/components/` prepopulated, making it easy to find other files in the same folder.

## Development

### Prerequisites

- [Node.js 18+](https://nodejs.org/) (matches the version used by the bundled `@types/node` typings)
- npm 9+ (ships with Node 18)
- VS Code 1.74 or newer (as declared in `engines.vscode`)

### Install & Compile

1. Install dependencies with `npm install`.
2. Build once with `npm run compile` to generate the initial `out/` folder.

### Inner-loop workflow

- Start the background TypeScript watcher via the default build task (F5 automatically triggers `npm run watch`, or you can run it manually with `npm run watch`).
- Launch the extension host from **Run → Start Debugging** (F5) using the included **Run Extension** configuration.
- Changes you make to files under `src/` are recompiled automatically; reload the Extension Development Host (`Ctrl+R` inside the host window) to see the effect.

### Quality checks

- `npm run lint` – runs ESLint with the TypeScript plugin over `src/`.
- (Optional) add extension tests using `@vscode/test-electron` and hook them into CI when you're ready.

### Packaging & publishing

- Use [`vsce`](https://github.com/microsoft/vscode-vsce) to create a `.vsix` for manual installs or marketplace publishing: `npx vsce package`.
- Automate builds with CI before publishing so you can validate lint/tests on every push.
