var mongoose = require('mongoose'),
    Schema = require('mongoose').Schema,
    SubMenu = require('./SubMenu');

var menuSchema = new Schema({
    _id: Number,
    name: String,
    type: String,
    submenus: [SubMenu.schema]
});

module.exports = mongoose.model("Menu", menuSchema);