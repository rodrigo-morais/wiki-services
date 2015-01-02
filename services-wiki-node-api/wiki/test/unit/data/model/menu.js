describe("Unit Test: Model/Menus", function () {
    'use strict';
    
    var mongoose = require('mongoose'),
        menuSchema = require('../../../../app/data/model/menu');

    describe("populate menu model", function () {
        
        it("verify toJSON method convert _id to id", function (done) {
            try { // boilerplate to be able to get the assert failures
                var menu = new menuSchema({
                    _id: 1
                }),
                newMenu = JSON
                            .parse(
                                JSON
                                    .stringify(menu)
                            );

                            console.log(newMenu);

                newMenu.id.should.equal(1);
                done();
            } catch (err) {
                done(err);
            }
        });

        it("verify toJSON method delete _id property", function (done) {
            try { // boilerplate to be able to get the assert failures
                var menu = new menuSchema({
                    _id: 1
                }),
                newMenu = JSON
                            .parse(
                                JSON
                                    .stringify(menu)
                            );

                (newMenu._id === undefined).should.be.true;
                done();
            } catch (err) {
                done(err);
            }
        });
    });
});