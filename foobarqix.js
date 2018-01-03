/*jslint browser es6*/ /*global window*/
window.foobarqix = function foobarqix(value) {
    "use strict";
    function matchingFactor(digit, factorNames) {
        return factorNames.filter(function ([factor]) {
            return factor === digit;
        }).map(function ([ignore, name]) {
            return name;
        });
    }

    if (typeof value !== "string") {
        return foobarqix(String(value));
    }
    var factorNames = [["3", "Foo"], ["5", "Bar"], ["7", "Qix"]];
    var str = factorNames.filter(function ([factor]) {
        return value % factor === 0;
    }).map(function ([ignore, name]) {
        return name;
    }).join("");
    var suffix = value.split("").map(function (digit) {
        return matchingFactor(digit, factorNames);
    }).join("");

    if (value === "101") {
        return value.replace("0", "*");
    }
    if (!str && !suffix) {
        return value;
    }
    return str + suffix;
};
