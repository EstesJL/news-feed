var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
var request = require('request');

var db = require('./config/db');

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));





app.listen(8000);

console.log("Server running on 8000");



module.exports = app;