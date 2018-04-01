# Node Getting Started

A quick start app using the node builder for crafting back end apps.

First, install the VTEX Toolbelt and log in:

```bash
$ npm i -g vtex
$ vtex login
```

Download this repo and open a terminal in its folder.

Then, use `link` to start developing your app:

```bash
$ vtex link
```

Finally, access your endpoint at:

https://{{workspace}}--{{account}}.myvtex.com/api/vtex/hello


## Debugging

Once the app is linked, toolbelt listens on port `5858` (_localhost_) for Node inspect connections.

In **Visual Studio Code**, you can simply set breakpoints and start debugging (<kbd>F5</kbd>).
