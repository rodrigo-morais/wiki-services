var Property = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var propertySchema = new Schema({
        _id: Number,
        name: String,
        type: String
    });

    return {
        model: mongoose.model("Property", propertySchema),
        schema: propertySchema
    };
}();

module.exports = Property;