describe("Unit Test: Model/Menus", function () {
    'use strict';
    
    var mongoose = require('mongoose'),
        subMenuSchema = require('../../../../app/data/model/subMenu');

    describe("populate subMenu model", function () {
        
        it("verify toJSON method convert _id to id", function (done) {
            try {
                var subMenu = new subMenuSchema.model({
                    _id: 1
                }),
                newSubMenu = JSON
                            .parse(
                                JSON
                                    .stringify(subMenu)
                            );

                newSubMenu.id.should.equal(1);
                done();
            } catch (err) {
                done(err);
            }
        });

        it("verify toJSON method delete _id property", function (done) {
            try {
                var subMenu = new subMenuSchema.model({
                    _id: 1
                }),
                newSubMenu = JSON
                            .parse(
                                JSON
                                    .stringify(subMenu)
                            );

                (newSubMenu._id === undefined).should.be.true;
                done();
            } catch (err) {
                done(err);
            }
        });
    });
});