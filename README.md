# Quick Open Folder Based

A VS Code extension which makes the Quick Open (Ctrl + P) search scope itself to the folder of the currently opened file by prepopulating the field with the folder.

## Features

- When you press `Ctrl+P` (or `Cmd+P` on Mac), the Quick Open dialog opens with the folder path of the currently active file prepopulated (e.g., `app/`)
- This overrides VS Code's "Quick Open preserve input" setting when the prepopulated folder differs from what would have been preserved

## Usage

Simply press `Ctrl+P` (or `Cmd+P` on Mac) while editing a file. The Quick Open dialog will open with the file's folder path already filled in, allowing you to quickly search for files within the same folder.

## Example

If you're editing a file at `src/components/Button.tsx`, pressing `Ctrl+P` will open Quick Open with `src/components/` prepopulated, making it easy to find other files in the same folder.
