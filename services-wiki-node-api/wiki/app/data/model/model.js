var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Property = require('./property');

var modelSchema = new Schema({
    name: String,
    type: String,
    json: String,
    properties: [Property.schema]
});

modelSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model("Model", modelSchema);