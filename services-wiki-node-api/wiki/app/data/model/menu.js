var mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    SubMenu = require('./subMenu');

var menuSchema = new Schema({
    _id: Number,
    name: String,
    type: String,
    submenus: [SubMenu.schema]
});

menuSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model("Menu", menuSchema);