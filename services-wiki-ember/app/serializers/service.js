import DS from "ember-data";

var ServiceSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        httpVerbs: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "service": payload };
        return this._super(store, type, payload, id);
    }
});

export default ServiceSerializer;