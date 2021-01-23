const vscode = require("vscode");
const { copy } = require("copy-paste");

function activate(context) {
  const disposable = vscode.commands.registerCommand("copyEncodedWorkspacePath", function(uri) {
    if (typeof uri === "undefined") {
      if (vscode.window.activeTextEditor) {
        uri = vscode.window.activeTextEditor.document.uri;
      }
    }
    if (!uri) {
      vscode.window.showErrorMessage("Cannot copy path, as there appears no file is opened (or it's very large");
      return;
    }
    let path = vscode.workspace.asRelativePath(uri);
    path = encodeURI("/" + path.replace(/\\/g, "/"));
    copy(path);
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;

// eslint-disable-next-line no-empty-function
function deactivate() {}
exports.deactivate = deactivate;
