import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('quickOpenFolderBased.openQuickOpen', async () => {
        const workspaceFolders = vscode.workspace.workspaceFolders;

        // Only activate when workspace has more than one folder
        if (!workspaceFolders || workspaceFolders.length <= 1) {
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        const activeEditor = vscode.window.activeTextEditor;

        if (!activeEditor) {
            // No active editor, just open Quick Open without prepopulation
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        const document = activeEditor.document;
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);

        if (!workspaceFolder) {
            // File is not in a workspace, just open Quick Open without prepopulation
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        const folderName = workspaceFolder.name?.trim();

        if (!folderName) {
            await vscode.commands.executeCommand('workbench.action.quickOpen');
            return;
        }

        const folderPrefix = `${folderName}/`;

        // Open Quick Open with the workspace folder prefix prepopulated
        await vscode.commands.executeCommand('workbench.action.quickOpen', folderPrefix);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
