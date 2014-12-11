import DS from "ember-data";

var HttpVerbSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        parameters: { embedded: 'always' },
        returns: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "httpVerb": payload };
        return this._super(store, type, payload, id);
    }
});

export default HttpVerbSerializer;