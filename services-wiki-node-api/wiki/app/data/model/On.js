var On = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var onSchema = new Schema({
        _id: Number,
        name: String,
        type: String,
        parameters: String
    });
    
    onSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("On", onSchema),
        schema: onSchema
    };
}();

module.exports = On;