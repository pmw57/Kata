/*jslint browser*/ /*global window, foobarqix*/
(function iife() {
    "use strict";
    function expect(actual, expected, msg) {
        console.log(msg);
        if (actual !== expected) {
            console.error(" Expected " + expected + " but got " + actual);
        }
    }
    setTimeout(function () {
        window.location = window.location;
    }, 2000);

    // place tests here
    expect(foobarqix("1"), "1", "1 doesn't match any critera so comes out unchanged");
    expect(foobarqix("3"), "FooFoo", "3 is divisible by 3, and contains 3");
    expect(foobarqix("6"), "Foo", "6 is divisible by 3");
    expect(foobarqix("13"), "Foo", "13 contains a 3");
}());