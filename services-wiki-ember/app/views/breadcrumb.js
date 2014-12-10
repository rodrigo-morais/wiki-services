import Ember from 'ember';

var BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumb",
    path: function () {
        var paths = [],
            model = this.get('model');

        this.get('paths').split(',').forEach(function(element){
            if (model.get(element) === undefined) {
                paths.push(element);
            }
            else {
                paths.push(model.get(element));
            }
        });

        return paths;
    }.property('paths'),
    page: "",
    model: {}
});

export default BreadcrumbView;