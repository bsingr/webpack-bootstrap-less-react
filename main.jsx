require('bootstrap-webpack');

var React = require('react');
var App = require('./app.jsx').App;

require('./ext.js');

React.render(<App/>, document.body);

document.head.getElementsByTagName("title")[0].text = "Hello World!"

$('#one').foo();
