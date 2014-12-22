var mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    HttpVerb = require('./HttpVerb');

var serviceSchema = new Schema({
    _id: String,
    name: String,
    routePrefix: String,
    httpVerbs: [HttpVerb.schema]
});

serviceSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model("Service", serviceSchema);