var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Invoke = require('./invoke');

var hubSchema = new Schema({
    _id: String,
    name: String,
    invokes: [Invoke.schema]
});

hubSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model("Hub", hubSchema);