import Ember from 'ember';

var _getPathPart = function(model, newPaths){
    return new Ember.RSVP.Promise(function(resolve){
        if (model.get(newPaths) === undefined && newPaths.indexOf('.') <= -1) {
            resolve(newPaths);
        }
        else {
            if(model.get(newPaths)){
                resolve(model.get(newPaths));
            }
            else{
                var modelData = newPaths.split('.')[0],
                    attrData = newPaths.split('.')[1];
                model.model._data[modelData].store.find(modelData, model.model._data[modelData]['id']).then(function(element){
                    resolve(element.get(attrData));
                });
            }
        }
    });
};

var _createPath = function(model, pathsInline, self){
    var counter = 0, total = pathsInline.length,
        paths = [];

    return new Ember.RSVP.Promise(function(resolve){
        pathsInline.forEach(function(element){
            _getPathPart(model, element).then(function(pathPart){
                paths.push(pathPart);
                counter = counter + 1;
                if(counter === total){
                    var returnData = {
                        paths: paths,
                        self: self
                    };
                    resolve(returnData);
                }
            });
        });
    });
};

var BreadcrumbComponent = Ember.Component.extend({
    path: function () {
        var model = this.get('model'),
            self = this;
        
        if(Array.isArray(this.get('paths'))){
            return this.get('paths');
        }
        else{
            if(this.get('paths').indexOf('.') === -1){
                return this.get('paths').split(',');
            }

            _createPath(model, this.get('paths').split(','), self).then(function(result){
                result.self.set('paths', result.paths);
                return result.paths;
            });
        }

    }.property('paths'),
    page: "",
    model: {}
});

export default BreadcrumbComponent;