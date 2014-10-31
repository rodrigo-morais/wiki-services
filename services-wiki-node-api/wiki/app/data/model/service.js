var mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    HttpVerb = require('./httpVerb');

var serviceSchema = new Schema({
    _id: Number,
    name: String,
    routePrefix: String,
    httpVerbs: [HttpVerb.schema]
});

module.exports = mongoose.model("Service", serviceSchema);