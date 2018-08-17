var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function(){
    it ('should deal with objects', function(){
        var obj = {name: 'James', gender: 'male'};
        var objB = obj;

        //obj.should.have.property('name').equal('James');
        obj.should.deep.equal(objB);
    });
    it('should allow testing nulls', function (){
        var iAmNull = null;
        should.not.exist(iAmNull);
    })
});
