"use strict";
exports.__esModule = true;
var chai = require("chai");
var hello_1 = require("./hello");
describe('hello 테스트', function () {
    it('동일 문자를 반환하는지 테스트', function () {
        chai.expect(hello_1["default"]('world')).to.be.equal('world');
    });
});
