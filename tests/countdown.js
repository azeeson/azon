const assert = require('assert');
const {default: countdown} = require('../lib/countdown.js');

function delay(interval) {
   return it('Waiting...', done => {
      setTimeout(() => done(), interval)
   }).timeout(interval + 100) 
}

describe("countdown", function() {

    const myFnction = countdown(function(abc) {
        return abc;
    }, 1000);

    it('myFnction - First run with argument "Hello"', () => {
        assert.equal(myFnction('Hello'), 'Hello');
    });

    it('myFnction - Next run with argument "Test"', () => {
        assert.equal(myFnction('Test'), undefined);
    });

    delay(1000);

    it('myFnction - Another run after some time with argument "true"', () => {
        assert.equal(myFnction(true), true);
    });

    it('myFnction - Last run without argument', () => {
        assert.equal(myFnction(), undefined);
    });

    const newFnction = countdown(function(abc) {
        return abc;
    }, 1000);

    it('newFnction - First run with argument "Hello"', () => {
        assert.equal(newFnction('Hello'), 'Hello');
    });

    it('newFnction - Next run with argument "Test"', () => {
        assert.equal(newFnction('Test'), undefined);
    });

    delay(1000);

    it('newFnction - Another run after some time with argument "true"', () => {
        assert.equal(newFnction(true), true);
    });

    it('newFnction - Last run without argument', () => {
        assert.equal(newFnction(), undefined);
    });

});