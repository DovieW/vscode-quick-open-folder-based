import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('quickOpenFolderBased.openQuickOpen', async () => {
        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
            // No active editor, just open Quick Open without prepopulation
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        const document = activeEditor.document;
        const filePath = document.uri.fsPath;
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);

        if (!workspaceFolder) {
            // File is not in a workspace, just open Quick Open without prepopulation
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        // Get the relative path of the file within the workspace
        const relativePath = path.relative(workspaceFolder.uri.fsPath, filePath);
        
        // Get the folder path (directory containing the file)
        const folderPath = path.dirname(relativePath);

        // If the file is at the root of the workspace, don't prepopulate
        if (folderPath === '.' || folderPath === '') {
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        // Normalize path separators to forward slashes and add trailing slash
        const normalizedFolderPath = folderPath.split(path.sep).join('/') + '/';

        // Open Quick Open with the folder path prepopulated
        await vscode.commands.executeCommand('workbench.action.quickOpen', normalizedFolderPath);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
