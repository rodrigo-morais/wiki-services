describe("Unit Test: Socket", function () {
    'use strict';
    
    var sockets = require('../../../app/data/sockets');
    var util = require('../unit_util');

    describe("get all sockets", function () {
        
        it("should return two items", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets.should.have.length(2);
                done();
            });
        });

        it("should firts socket is in correct order", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets[0]._id.should.equal(88881);
                done();
            });
        });

        it("should last socket is in correct order", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets[1]._id.should.equal(88882);
                done();
            });
        });

        it("should last socket has two messages", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets[1].messages.should.have.length(2);
                done();
            });
        });

    });

    describe("get socket with name ", function () {

        it("'Socket Test' should return socket with id 99995", function (done) {
            sockets.getSocket('Socket Test', function (error, socket) {
                socket._id.should.equal(99995);
                done();
            });
        });

        it("'Socket with Messages Test' should return two messages", function (done) {
            sockets.getSocket('Socket with Messages Test', function (error, socket) {
                socket.messages.should.have.length(2);
                done();
            });
        });

        it("'Not Exist' shouldn't return sockets", function (done) {
            sockets.getSocket('Not Exist', function (error, socket) {
                error.error.should.equal("Socket 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get messages of service with name", function () {

        it("'Socket with Messages Test' should return two messages", function (done) {
            sockets.getMessages('Socket with Messages Test', function (error, messages) {
                messages.should.have.length(2);
                done();
            });
        });

        it("'Socket Test' should return two messages", function (done) {
            sockets.getMessages('Socket Test', function (error, messages) {
                messages.should.have.length(0);
                done();
            });
        });

        it("'Not Exist' shouldn't return messages", function (done) {
            sockets.getMessages('Not Exist', function (error, messages) {
                error.error.should.equal("Socket 'Not Exist' doesn't exist");
                done();
            });
        });

    });

});