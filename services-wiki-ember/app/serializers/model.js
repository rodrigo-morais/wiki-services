import DS from "ember-data";

var ModelSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        properties: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "model": payload };
        return this._super(store, type, payload, id);
    }
});

export default ModelSerializer;