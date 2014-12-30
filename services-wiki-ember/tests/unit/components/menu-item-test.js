import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('menu-item', {
    needs: [
        'component:menu-aggregator',
        'template:components/menu-aggregator'
    ]
});

test('verify if tag name is LI', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {}
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(this.$().context.tagName, 'LI');
});

test('verify name of item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item'
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('name'), 'Item');
});

test('verify type of item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model'
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('type'), 'model');
});

test('verify if item contain submenus', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('submenus').length, 2);
});

test('verify if name of first submenu of item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('submenus')[0].name, 'Sub 1');
});

test('verify if name of last submenu of item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('submenus')[1].name, 'Sub 2');
});

test('verify path of item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    equal(component.get('path'), '/model/Item');
});

test('verify if hasTypeParent property return true whem menu item contain this property', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'model'
            );
    });

    ok(component.get('hasTypeParent'));
});

test('verify if hasTypeParent property return false whem menu item not contain this property', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            );
    });

    ok(!component.get('hasTypeParent'));
});

test('verify uri property from menu item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'service'
            );
    });

    equal(component.get('uri'), 'serviceModel');
});

test('verify target property from menu item', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'service'
            );
    });

    equal(component.get('target'), 'service-model');
});

test('verify if hasChilds property return true when menu item contains submenus', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model',
                    submenus: [
                        {
                            name: 'Sub 1'
                        },
                        {
                            name: 'Sub 2'
                        }
                    ]
                }
            )
            .set(
                'type_parent',
                'service'
            );
    });

    ok(component.get('hasChilds'));
});

test('verify if hasChilds property return false when menu item not contains submenus', function(){
    var component = this.subject();

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model'
                }
            )
            .set(
                'type_parent',
                'service'
            );
    });

    ok(!component.get('hasChilds'));
});

test('verify if template of menu item without submenus not show UL', function(){
    var component = this.subject(),
        ul;

    Ember.run(function(){
        component
            .set(
                'model',
                {
                    name: 'Item',
                    type: 'model'
                }
            )
            .set(
                'type_parent',
                'service'
            );
    });
    

    ul = Ember.$(this.$().context).find('ul.list-unstyled');

    equal(ul.length, 0);
});