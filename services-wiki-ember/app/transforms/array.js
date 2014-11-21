import Ember from 'ember';
import DS from 'ember-data';
//import jQuery from './bower_components/jquery/dist/jquery';

export default DS.Transform.extend({
    deserialize: function (serialized) {
        var type = typeof serialized;
        return (type === "array") ? serialized : [];
    },

    serialize: function (deserialized) {
        var type = typeof deserialized;
        if (type === 'array') {
            return deserialized;
        } else if (type === 'string') {
            return deserialized.split(',').map(function (item) {
                return Ember.$().trim(item);
            });
        } else {
            return [];
        }
    }
});