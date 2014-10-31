var SubMenu = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var subMenuSchema = new Schema({
        _id: Number,
        name: String
    });

    return {
        model: mongoose.model("SubMenu", subMenuSchema),
        schema: subMenuSchema
    };
}();

module.exports = SubMenu;