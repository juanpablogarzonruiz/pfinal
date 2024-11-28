var express = require('express');
var cors = require("cors");
var serverless = require ('serverless-http');
/*
var port = process.env.PORT || 5000;
let eje;
*/
var app = express();
var estudiantesroutes = require("../../backend/routes/productosroutes.js");
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use ("/productos",estudiantesroutes);

var handler = app.use ('/.netlify/functions',router);
exports.handler = serverless (app);
/* ejemplo */
