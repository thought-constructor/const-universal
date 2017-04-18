var universal = require('./index.js')
var chai = require('chai'), assert = chai.assert

describe("const-universal", function () {

	it("should be its own parent, or parent should be void", function () {
		switch (universal.parent) {
			case universal: case undefined: case null: return assert(true)
			default: return assert(false)
		}
	})

	it("should exist", function () {
		assert('object' === typeof universal)
		assert(null !== typeof universal)
	})

	it("should include the standard constructors", function () {
		assert.isFunction(universal.Array, "Array")
		assert.isFunction(universal.Boolean, "Boolean")
		assert.isFunction(universal.Date, "Date")
		assert.isFunction(universal.Error, "Error")
		assert.isFunction(universal.Function, "Function")
		assert.isFunction(universal.Object, "Object")
		assert.isFunction(universal.RegExp, "RegExp")
		assert.isFunction(universal.String, "String")
		assert.isDefined(universal.Math)
	})

})
