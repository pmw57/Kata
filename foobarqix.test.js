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
}());