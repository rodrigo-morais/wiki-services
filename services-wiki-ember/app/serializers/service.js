import DS from "ember-data";

var ServiceSerializer = DS.RESTSerializer.extend({
    extractSingle: function (store, type, payload, id) {
        payload = { "service": payload };
        return this._super(store, type, payload, id);
    }
});

export default ServiceSerializer;