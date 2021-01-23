# Copy Encoded Workspace Path

This is a fork of [alexdima's extension](https://github.com/alexdima/vscode-copy-relative-path) in order to give you a context menu option for copying paths that:

- Uses the unix path seperator (`/`)
- Is workspace absolute (Starts with `/`)
- Is [URI Encoded](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) (Ie, spaces are replaced with `%20`, and so on)

Visual Studio Code's normal Copy Relative Path, on windows:

`example folder\example file.md`

Copy Encoded Workspace Path:

`/example%20folder/example%20file.md`

As this is incredibly niche (and [not up to spec](https://www.npmjs.com/package/vscode)), it's not published on the marketplace. You can use this extension via [vsce](https://www.npmjs.com/package/vsce), assuming it still works.
