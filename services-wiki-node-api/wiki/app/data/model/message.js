var Message = function () {

    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
		Parameter = require('./parameter'),
        Event = require('./event');

    var messageSchema = new Schema({
        _id: Number,
        name: String,
        parameters: [Parameter.schema],
        events: [Event.schema]
    });
    
    messageSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("Message", messageSchema),
        schema: messageSchema
    };
}();

module.exports = Message;