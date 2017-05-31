
# Web API
When writing code for the Web with JavaScript, there are a great many APIs available. [Web API](https://developer.mozilla.org/en-US/docs/Web/API) has a list of all the interfaces (that is, types of objects) that you may be able to use while developing your Web app or site.

## client-storage
study client-side storages: localstorage, web-sql,  indexeddb, filesystem-api

#### localStorage
* [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
* [Window.localStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage)
#### indexedDB, WebSQL, localStorage
* [localForage](https://localforage.github.io/localForage/): localForage support indexedDB, WebSQL, localStorage simultaneously.

#### FileAPI
* [Using files from web applications](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications)
* [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
* [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
* [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
* [FileAPI](https://w3c.github.io/FileAPI/)

## react+express
#### React.js Tutorial
* [React.js Tutorial Part 1](http://www.joshfinnie.com/blog/reactjs-tutorial-part-1/)
* [React.js Tutorial Part 2](http://www.joshfinnie.com/blog/reactjs-tutorial-part-2/)
* [React.js Tutorial Part 3](http://www.joshfinnie.com/blog/reactjs-tutorial-part-3/)
* [React.js Tutorial Part 4](http://www.joshfinnie.com/blog/reactjs-tutorial-part-4/)

Note: 
* react and react-dom are separated now. ReactDom is not in react now.
* React.creatClass is deprecated now.
* reactify dependents on react-tools
* react-tool is deprecated now, use babel instead

* `npm install` to install packages.
* `npm run gulp` to build client side codes and monitor changes.
* `npm run devstart` to start express server and monitor changes.
* `npm run build` to bundle client codes and monitor changes with webpack. 
    * [screendriver](https://github.com/screendriver) gave answer in [cannot resolve 'fs','net','tls' issue](https://github.com/request/request/issues/1529). use `  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }` in webpack.config.js.
    * still have message: `WARNING in ./~/ajv/lib/async.js
96:20-33 Critical dependency: the request of a dependency is an expression.`
* move gulp method to webpack method.
* use isomorphic-fetch to replace request, warning are the same.

