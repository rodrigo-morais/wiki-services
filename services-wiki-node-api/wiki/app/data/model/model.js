var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Property = require('./property');

var modelSchema = new Schema({
    name: String,
    type: String,
    json: String,
    properties: [Property.schema]
});

module.exports = mongoose.model("Model", modelSchema);