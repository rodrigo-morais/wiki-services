var Invoke = function () {

    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Parameter = require('./Parameter'),
        On = require('./On');

    var invokeSchema = new Schema({
        _id: Number,
        name: String,
        parameters: [Parameter.schema],
        ons: [On.schema]
    });
    
    invokeSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("Invoke", invokeSchema),
        schema: invokeSchema
    };
}();

module.exports = Invoke;