
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

* use mathjax to typeset mathematical formula.
* [Modifying Math on the Page](http://docs.mathjax.org/en/latest/advanced/typeset.html#typeset-math) 
show how to dynamically Typeset formula.

* use img tag to display image stored on server in binary format.[store/display an image in mongodb using mongoose/express](https://gist.github.com/aheckmann/2408370)
## multer demo

controller part:
```
var multer = require('multer')

router.post('/profile', multer().single('avatar'),function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  console.log(req.body.firstname)
  res.end("File is uploaded to server's memory as Buffer")
})
```
view part:
```
form(action="/profile", method="post" ,enctype="multipart/form-data")
    input(type="text", name="firstname", id="firstname")
    input(type="file", name="avatar", id="avatar")
    input(type="submit")```
```

## Content-Security-policy & XSS
We can use Content-Security-policy to help browser protect users from XSS attack.

It seems Chrome and Edge respect Content-Security-policy but IE do not.

When the Content-Security-policy is changed, the browser's cache may affect the time it takes to take effect.

[Excess XSS](https://excess-xss.com/) is a good tutorial about XSS.
[White List](https://excess-xss.com/whitelisting/) also.

[MDN Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is a must reference.

On [Wiki Web Application Security](https://en.wikipedia.org/wiki/Web_application_security),
XSS and Sql injection are the top two threats.

[XSRF Cross-site_request_forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) is another threat.

Middleware to set Content-Security-Policy, accept https://cdnjs.cloudflare.com, refuse inline script.
```
  function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src https://cdnjs.cloudflare.com;");
  res.setHeader('charset', 'utf-8')
  next();
}
```
View
```
  div
    p inline javascript can be disabled by Content-Security-Policy.
    script() alert('Hello')
```