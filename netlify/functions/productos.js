var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
var app = express();
var productosroutes = require("../../backend/routes/productosroutes.js");
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/productos",productosroutes);

var handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);
