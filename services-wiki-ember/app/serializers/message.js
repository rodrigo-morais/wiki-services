import DS from "ember-data";

var MessageSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        parameters: { embedded: 'always' },
        events: { embedded: 'always' },
        socket: { serialize: 'ids' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "message": payload };
        return this._super(store, type, payload, id);
    }
});

export default MessageSerializer;