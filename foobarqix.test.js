/*jslint browser*/ /*global test expect*/
var foobarqix = require("./foobarqix.js");
(function iife() {
    "use strict";

    test("The function should exist", function () {
        expect(typeof foobarqix).toBe("function");
    });
    test("Values less than 1 give no output", function () {
        expect(foobarqix(0)).toBe("");
    });
    test("1 and 2 should give those numbers respectively", function () {
        expect(foobarqix(1)).toBe("1");
        expect(foobarqix(2)).toBe("2");
    });
    test("Divisible by 3 gives Foo", function () {
        expect(foobarqix(3)).toBe("FooFoo");
    });
    test("4 should give 4", function () {
        expect(foobarqix(4)).toBe("4");
    });
    test("Divisible by 5 gives Bar", function () {
        expect(foobarqix(5)).toBe("BarBar");
    });
    test("6 should give Foo", function () {
        expect(foobarqix(6)).toBe("Foo");
    });
    test("Divisible by 7 gives Qix", function () {
        expect(foobarqix(7)).toBe("QixQix");
    });
    test("15 should be FooBar", function () {
        expect(foobarqix(15)).toBe("FooBarBar");
    });
    test("For each digit 3, 5, 6, add Foo, Bar Qix", function () {
        expect(foobarqix(3)).toEqual("FooFoo");
    });
    test("An asterisk must be included for each 0 in a number", function () {
        expect(foobarqix(101)).toBe("1*1");
    });
    test("An asterisk must occur between the division and digit values", function () {
        expect(foobarqix(303)).toBe("FooFoo*Foo");
        expect(foobarqix(105)).toBe("FooBarQix*Bar");
        expect(foobarqix(10101)).toBe("FooQix**");
    });
// we must keep a trace of 0 in numbers, for example: 105 => FooBarQix*Bar
}());