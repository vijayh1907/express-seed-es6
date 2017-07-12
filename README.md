# express-seed-es6

This is my opinionated starter for an express web app. In order to leverage the latest version of JS(ES6) It uses Babel as a transpiler.

## Setup

Commands to run after installing node & npm

* `npm install`: Install dependencies
* `npm start`: Launch the server
* `npm install -g @angular/cli`: To install the Angular CLI

### Project structure

```
├── app/                         * Source of Server side app
│   ├── api/                     * Every Services/Routes
│   ├── app.js                   * Entry point of the application, launches the server
│   ├── app.router.js            * Main router
├── bootstrap-app.js             * Bootsrap the application for ES6 using Babel
├── client/                      * Source of Client side app
│   ├── public                   * Public folder to contain static distribution files
│       ├──index.html            * Starting point for front-end app
├── node_modules/                * NPM third party modules
├── nodemon.json                 * Nodemon config file (WIP)
├── package.json                 * Third party libraries list
└── README.md                    * This file
```

### Web Service

A web service is specified by a route and is in the app/api folder. Here is the common structure for a web service:

```
app/api/                         * Every web services
└── hello                        * Folder of the web service
    ├── hello.controller.js      * No logic, just passing the request parameters to the service
    ├── hello.router.js          * Set routes to controller methods
    └── hello.service.js         * The logic of the web service
```
### Front End

#To Run App -
- cd into the app
- npm install
- ng serve / ng serve --host=0.0.0.0 --port=xxxx

#To Build App -
- cd into app
- ng build
