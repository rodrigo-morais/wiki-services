import DS from "ember-data";

var InvokeSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        parameters: { embedded: 'always' },
        ons: { embedded: 'always' },
        hub: { serialize: 'ids' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "invoke": payload };
        return this._super(store, type, payload, id);
    }
});

export default InvokeSerializer;