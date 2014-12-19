import DS from "ember-data";

var ServiceModelSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        properties: { embedded: 'always' }
    },
    extractSingle: function (store, type, payload, id) {
        payload = { "serviceModel": payload };
        return this._super(store, type, payload, id);
    }
});

export default ServiceModelSerializer;