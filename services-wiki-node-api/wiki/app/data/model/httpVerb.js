var HttpVerb = function () {

    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Parameter = require('./Parameter'),
        Return = require('./Return');

    var httpVerbSchema = new Schema({
        _id: Number,
        verb: String,
        route: String,
        parameters: [Parameter.schema],
        returns: [Return.schema]
    });
    
    httpVerbSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });
    

    return {
        model: mongoose.model("HttpVerb", httpVerbSchema),
        schema: httpVerbSchema
    };
}();

module.exports = HttpVerb;