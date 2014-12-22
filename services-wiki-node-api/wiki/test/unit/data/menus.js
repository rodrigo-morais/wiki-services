describe("Unit Test: Menus", function () {
    'use strict';
    
    var menus = require('../../../app/data/menus');
    var util = require('../unit_util');

    describe("get menus", function () {

        it("should return two of menus", function (done) {
            menus.getMenus(function (error, menus) {
                menus.should.have.length(2);
                done();
            });
        });

        it("should return three services in tree", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus.should.have.length(4);
                done();
            });
        });

        it("should return services orderned in tree of menus where first menus is 'Service 1'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[0].name.should.equal('Service 1');
                done();
            });
        });

        it("should return services orderned in tree of menus where last menus is 'Service 3'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[2].name.should.equal('Service 3');
                done();
            });
        });

        it("should return two sockets in tree", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus.should.have.length(3);
                done();
            });
        });

        it("should return sockets orderned in tree of menus where first menus is 'First Socket'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[0].name.should.equal('First Socket');
                done();
            });
        });

        it("should return sockets orderned in tree of menus where last menus is 'Second Socket'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[1].name.should.equal('Second Socket');
                done();
            });
        });

        it("should return services models in tree of menus", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[3].type.should.equal('models');
                done();
            });
        });

        it("should return two services models in tree", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[3].submenus.should.have.length(2);
                done();
            });
        });

        it("should return services models orderned in tree of menus where first menus is 'Communication'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[3].submenus[0].name.should.equal('Communication');
                done();
            });
        });

        it("should return services models orderned in tree of menus where last menus is 'Integration'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[0].submenus[3].submenus[1].name.should.equal('Integration');
                done();
            });
        });

        it("should return sockets models in tree of menus", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[2].type.should.equal('models');
                done();
            });
        });

        it("should return four sockets models in tree", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[2].submenus.should.have.length(4);
                done();
            });
        });

        it("should return sockets models orderned in tree of menus where first menus is 'A model'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[2].submenus[0].name.should.equal('A model');
                done();
            });
        });

        it("should return sockets models orderned in tree of menus where last menus is 'Z model'", function (done) {
            menus.getMenus(function (error, menus) {
                menus[1].submenus[2].submenus[3].name.should.equal('Z model');
                done();
            });
        });

    });
});