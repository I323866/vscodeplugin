// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "csvp1" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World111!')

		const panel = vscode.window.createWebviewPanel(
			'catCoding',
			'Cat Coding',
			vscode.ViewColumn.One,
			{
				enableScripts: true

			}
		);

		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
    // context.subscriptions.push(vscode.commands.registerCommand('extension.openWebview', function () {
	// 	// 创建webview
	// 	const panel = vscode.window.createWebviewPanel(
	// 		'testWebview', // viewType
	// 		"WebView演示", // 视图标题
	// 		vscode.ViewColumn.One, // 显示在编辑器的哪个部位
	// 		{
	// 			enableScripts: true, // 启用JS，默认禁用
	// 			retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
	// 		}
	// 	);
	// 	panel.webview.html = `<html><body>你好，我是Webview</body></html>`
	// }))
}

// this method is called when your extension is deactivated
export function deactivate() {}
function getWebviewContent() {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
  </body>
  </html>`;
  }
//  /**
// * 获取某个扩展文件相对于webview需要的一种特殊路径格式
// * 形如：vscode-resource:/Users/toonces/projects/vscode-cat-coding/media/cat.gif
// * @param context 上下文
// * @param relativePath 扩展中某个文件相对于根目录的路径，如 images/test.jpg
// */
// export function getExtensionFileVscodeResource(context, relativePath) {
//    const diskPath = vscode.Uri.file(path.join(context.extensionPath, relativePath));
//    return diskPath.with({ scheme: 'vscode-resource' }).toString();
// }

// /**
//  * 从某个HTML文件读取能被Webview加载的HTML内容
//  * @param {*} context 上下文
//  * @param {*} templatePath 相对于插件根目录的html文件相对路径
//  */
// export function getWebViewContent(context, templatePath) {
//     const resourcePath = path.join(context.extensionPath, templatePath);
//     const dirPath = path.dirname(resourcePath);
//     let html = fs.readFileSync(resourcePath, 'utf-8');
//     // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
//     html = html.replace(/(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g, (m, $1, $2) => {
//         return $1 + vscode.Uri.file(path.resolve(dirPath, $2)).with({ scheme: 'vscode-resource' }).toString() + '"';
//     });
//     return html;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 'use strict';
// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

// // this method is called when your extension is activated
// // your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

//     // Use the console to output diagnostic information (console.log) and errors (console.error)
//     // This line of code will only be executed once when your extension is activated
//     console.log('Congratulations, your extension "myext" is now active!');
//     let editor: any;
//     // The command has been defined in the package.json file
//     // Now provide the implementation of the command with  registerCommand
//     // The commandId parameter must match the command field in package.json
//     let disposable = vscode.commands.registerCommand('extension.mycode', () => {
//         // The code you place here will be executed every time your command is executed
        
//         //取得 active 的 editor
//         editor = vscode.window.activeTextEditor;
//         if (!editor) {
//             return; // No open text editor
//         }
//         //取得 select 了的文字 <-- 這個重點, 就是用來用 Server 溝通的
//         let myselect = editor.selection;
//         let text: string = editor.document.getText(myselect);

//         const http = require('http');
//         http.get('http://192.168.0.44:88/prjAngularTSApi/api/angular/mytest?data=' + text , (resp:any) => {
//             let data = '';

//             resp.on('data', (chunk:any) => {
//                 data += chunk;
//             });
//             resp.on('end', () => {
//                 console.log(data);
//                 let tmp = JSON.parse(data);
//                 let s: vscode.SnippetString;
//                 s = new vscode.SnippetString(tmp);
//                 editor.insertSnippet(s);
//             });
//         }
//         ).on("error", (err:any) => {
//             console.log("Error: " + err.message);
//         });

//         // Display a message box to the user
//         vscode.window.showInformationMessage('Hello World!');
//     });

//     context.subscriptions.push(disposable);
// }

// // this method is called when your extension is deactivated
// export function deactivate() {
// }

