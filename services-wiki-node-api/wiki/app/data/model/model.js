var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Property = require('./property');

var modelSchema = new Schema({
    name: String,
    type: String,
    json: Schema.Types.Mixed,
    properties: [Property.schema]
});

modelSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
		
		var jsonObj = ret.json;
		delete ret.json;
		ret.json = JSON.stringify(jsonObj, undefined, 2);
    }
});

module.exports = mongoose.model("Model", modelSchema);