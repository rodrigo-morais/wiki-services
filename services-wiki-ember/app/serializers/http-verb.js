import DS from "ember-data";

var HttpVerbSerializer = DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        parameters: { embedded: 'always' },
        returns: { embedded: 'always' }
    }
});

export default HttpVerbSerializer;