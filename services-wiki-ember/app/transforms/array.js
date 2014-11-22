import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
    deserialize: function (serialized) {
        return (serialized instanceof Array) ? serialized : [];
    },

    serialize: function (deserialized) {
        if (deserialized instanceof Array) {
            return deserialized;
        } else if (deserialized instanceof String) {
            return deserialized.split(',').map(function (item) {
                return Ember.$().trim(item);
            });
        } else {
            return [];
        }
    }
});