var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema,
        Invoke = require('./invoke');

var hubSchema = new Schema({
    _id: String,
    name: String,
    invokes: [Invoke.schema]
});

module.exports = mongoose.model("Hub", hubSchema);