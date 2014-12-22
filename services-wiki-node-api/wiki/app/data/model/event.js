var Event = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var eventSchema = new Schema({
        _id: Number,
        name: String,
        type: String,
        parameters: String
    });
    
    eventSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("Event", eventSchema),
        schema: eventSchema
    };
}();

module.exports = Event;