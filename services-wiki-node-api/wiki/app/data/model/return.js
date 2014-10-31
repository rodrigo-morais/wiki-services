var Return = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var returnSchema = new Schema({
        _id: Number,
        code: String,
        name: String,
        type: String,
        object: String,
        message: String
    });

    return {
        model: mongoose.model("Return", returnSchema),
        schema: returnSchema
    };
}();

module.exports = Return;