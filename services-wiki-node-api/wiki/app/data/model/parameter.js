var Parameter = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var parameterSchema = new Schema({
        _id: Number,
        name: String,
        type: String
    });

    return {
        model: mongoose.model("Parameter", parameterSchema),
        schema: parameterSchema
    };
}();

module.exports = Parameter;