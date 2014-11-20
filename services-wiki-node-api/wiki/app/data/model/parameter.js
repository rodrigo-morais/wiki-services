var Parameter = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var parameterSchema = new Schema({
        _id: Number,
        name: String,
        type: String
    });
    
    parameterSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("Parameter", parameterSchema),
        schema: parameterSchema
    };
}();

module.exports = Parameter;