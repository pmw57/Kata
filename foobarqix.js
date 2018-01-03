/*jslint browser es6*/ /*global window*/
window.foobarqix = function foobarqix(value) {
    "use strict";
    if (typeof value !== "string") {
        return foobarqix(String(value));
    }
    var str = "";
    var factorNames = [["3", "Foo"], ["5", "Bar"]];
    factorNames.forEach(function ([factor, name]) {
        if (value % factor === 0) {
            str += name;
        }
    });
    factorNames.forEach(function ([factor, name]) {
        if (value.includes(factor)) {
            str += name;
        }
    });
    if (!str) {
        return value;
    }
    return str;
};
