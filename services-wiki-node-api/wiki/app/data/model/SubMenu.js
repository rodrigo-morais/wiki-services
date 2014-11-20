var SubMenu = function () {
    var mongoose = require('mongoose'),
        Schema = require('mongoose').Schema;

    var subMenuSchema = new Schema({
        _id: Number,
        name: String
    });
    
    subMenuSchema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
        }
    });

    return {
        model: mongoose.model("SubMenu", subMenuSchema),
        schema: subMenuSchema
    };
}();

module.exports = SubMenu;