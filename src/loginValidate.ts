// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
        console.log('Congratulations, your extension "loginValidate" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.loginValidate', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        const panel = vscode.window.createWebviewPanel(
            'catCoding',
            'Login Validate',
            vscode.ViewColumn.One,
            {
                // Enable scripts in the webview
                enableScripts: true
            }
        );

        panel.webview.html = getWebviewContent();
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
function getWebviewContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>登录</title>
</head>
<body>
<div id="form">
<form id="login">
    <p>User:<input type="text" id="userName" style="color:black;"/></p>
    <p>Password:<input type="password" id="password" style="color:black;"/></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="color:black;" value="Login" onclick="test()"/>

</form>
<div id="register">
</div>
</div>
 <script>
 function test(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    console.log(xhr.responseText);
    $("#login).hide();
    } else {
    console.log(xhr.responseText);
    }
    }
    };
    xhr.open("POST", "http://localhost:8080/test-web/sysUser/queryUserCodeByInfo?userCode=2", true);
    xhr.send(null);            
} 

function exits(){
    
  $("#login").show();

}

 </script>
</body>
</html>`;
}