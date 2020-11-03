"use strict";
var chai = require("chai");
var sinon = require("sinon");
var functions = require("../Helper/functions");
chai.should();

describe("Functions", function () {
  describe("isEven", function () {
    it("Should return true if number is even", function () {
      const evenNum = 4;
      functions.isEven(evenNum).should.be.true;
    });
    it("Should return false if number is odd", function () {
      const oddNum = 5;
      functions.isEven(oddNum).should.be.false;
    });
  });

  describe("Add", function () {
    it("Should return eight when adding 4 to 4", function () {
      const n1 = 4;
      const n2 = 4;
      const sum = 8;
      functions.add(n1, n2).should.equal(sum);
    });
    it("Should return twelve when adding 7 to 5 ", function () {
      const n1 = 5;
      const n2 = 7;
      const sum = 12;
      functions.add(n1, n2).should.equal(sum);
    });
  });
  describe("dropClass", function () {
    it("should run callback function", function () {
      const spy = sinon.spy();
      const id = 1;
      functions.dropClass(id, spy);
      spy.called.should.to.true;
    });
    it("should run callback function and log value to the console", function () {
      const fakeFun = () => console.log("callback function was called");
      const spy = sinon.spy(fakeFun);
      const id = 1;
      functions.dropClass(id, spy);
      spy.called.should.to.true;
    });
  });
});
