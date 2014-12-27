import DS from "ember-data";

var SocketSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        messages: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "socket": payload };
        return this._super(store, type, payload, id);
    }
});

export default SocketSerializer;