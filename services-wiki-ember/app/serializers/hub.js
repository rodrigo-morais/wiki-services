import DS from "ember-data";

var HubSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        invokes: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "hub": payload };
        return this._super(store, type, payload, id);
    }
});

export default HubSerializer;