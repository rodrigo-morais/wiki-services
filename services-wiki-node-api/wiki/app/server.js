var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    controllers = require("./controllers"),
    config = require("./config"),
    cors = require('cors');

require('./data');

app.use(bodyParser());
app.use(cors());

// Map the routes
controllers.init(app);

app.listen(config.port);
console.log('Server running on port ' + config.port);