var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes")(app);



// * Starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });