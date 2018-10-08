# Link Catcher
A library designed to filter links in markdown language.

## Motivation
This was the final project of the fourth sprint of Laboratoria bootcamp. The challenge was to create an npm library to capture links in markdown language using Regex. In addition, using Mocha, Chai and NYC to perform unit tests.

## Installation
+ Requires Node.js, NPM and Lodash. If you do not have it, go to:
	1. [Node + NPM](https://nodejs.org/en/download/);
	2. [Lodash](https://lodash.com/);
+ In the terminal, go to the folder where you want to use the library and then type:
```
$ npm install dc-link-catcher-lib
```

## Use
```
$ node
> const library = require("dc-link-catcher-lib")
> library.getLinksFromMd("this is Google's link: [google](www.google.com)") 
> //[ {href: "www.google.com", text: "google"} ]
```

## Appearance
![App map](./images/link-catcher.png)

## Technology Stack
+ HTML5
+ CSS3
+ JavaScript 
+ NPM
+ Mocha
+ Chai
+ NYC
+ Lodash

## Oficial Roadmap

#### version 2.0.0 (scheduled for November 2018)
+ Implementation of recognition of more complex URLs: with protocol, domain, paths, resource, query_string and fragment.

#### version 1.0.0 (released)
+ Can capture links and titles and save it in an object. These links could have or not have a protocol (http://, https://) or a path (/path).
