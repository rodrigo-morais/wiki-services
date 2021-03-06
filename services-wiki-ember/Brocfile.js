/// <reference path="bower_components/bootstrap/dist/js/bootstrap.js" />
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    sinon = pickFiles('bower_components/sinon', {
        srcDir: '/',
        files: ['index.js'],
        destDir: '/assets/sinon'
    });



var app = new EmberApp({
    es3Safe: false
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
});
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
});
app.import('bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
});

//module.exports = app.toTree();
module.exports = mergeTrees([app.toTree(), sinon]);
