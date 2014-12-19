import Ember from 'ember';

var JsonPrettyView = Ember.View.extend({
    templateName: "jsonPretty",
    pretty: function () {
        return this.get('jsonObj');
    }.property('jsonObj')
});

export default JsonPrettyView;