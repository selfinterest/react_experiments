/**
 * Created by terrence on 3/29/15.
 */

require('node-jsx').install();
var express = require("express");
var React = require("react");
var APP = React.createElement(require("../app/scripts/components/App"));
var url = require("url");
var app = express();


app.use('/', express.static(__dirname + '/../dist'));


app.get("*", function(req, res){

    var markup = React.renderToString(APP);
    res.send(markup);
});

app.listen(9999, function(){
    console.log("Listening");
});
