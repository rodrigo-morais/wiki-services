var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Message = require('./message');

var socketSchema = new Schema({
    _id: String,
    name: String,
    messages: [Message.schema]
});

socketSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model("Socket", socketSchema);