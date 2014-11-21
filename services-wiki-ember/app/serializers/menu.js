import DS from "ember-data";

var MenuSerializer = DS.RESTSerializer.extend({
    extractArray: function (store, type, payload) {
        payload = { "menus": payload };
        return this._super(store, type, payload);
    }
});

export default MenuSerializer;