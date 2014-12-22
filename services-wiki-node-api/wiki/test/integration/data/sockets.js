describe("Integration Test: Data - Sockets", function () {
    'use strict';
    
    var sockets = require('../../../app/data/sockets');
    
    describe("get all sockets", function (){

        it("should return two items", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets.should.have.length(4);
                done();
            });
        });

        it("should return in first position the socket with id 88885", function (done) {
            sockets.getSockets(function (error, sockets) {
			
                sockets[0]._id.should.equal('88885');
                done();
            });
        });

        it("should return in last position the socket with id 88884", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets[3]._id.should.equal('88884');
                done();
            });
        });

        it("should return socket with three message", function (done) {
            sockets.getSockets(function (error, sockets) {
                sockets[1].messages.should.have.length(3);
                done();
            });
        });

    });

    describe("get a socket", function () {

        it("by name 'Communications Test' should return the same with id 88883", function (done) {
            sockets.getSocket('Communications Test', function (error, socket) {
                socket._id.should.have.equal('88883');
                done();
            });
        });

        it("by name 'Communications Test' should return the same with three messages", function (done) {
            sockets.getSocket('Communications Test', function (error, socket) {
                socket.messages.should.have.length(3);
                done();
            });
        });

        it("by name 'Not Exist' shouldn't return a socket but a error message", function (done) {
            sockets.getSocket('Not Exist', function (error, socket) {
                error.error.should.equal("Socket 'Not Exist' doesn't exist");
                done();
            });
        });

    });

    describe("get messages of the socket", function () {

        it("by name 'Communications Test' should return three messages", function (done) {
            sockets.getMessages('Communications Test', function (error, messages) {
                messages.should.have.length(3);
                done();
            });
        });

        it("by name 'Fake 1 Test' shouldn't return verbs HTTP", function (done) {
            sockets.getMessages('Fake 1 Test', function (error, messages) {
                messages.should.have.length(0);
                done();
            });
        });

        it("by name 'Not Exist' shouldn't return verbs HTTP but a error message", function (done) {
            sockets.getMessages('Not Exist', function (error, messages) {
                error.error.should.equal("Socket 'Not Exist' doesn't exist");
                done();
            });
        });

    });
    
});