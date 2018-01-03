/*jslint browser es6*/ /*global window*/
window.foobarqix = function foobarqix(value) {
    "use strict";
    function matchingFactor(digit, factorNames) {
        return factorNames.filter(function ([factor]) {
            return factor === digit;
        }).map(function ([ignore, name]) {
            return name;
        }).join("");
    }
    function matchingFactorIterator(factorNames) {
        return function (value) {
            return matchingFactor(value, factorNames);
        };
    }

    if (typeof value !== "string") {
        return foobarqix(String(value));
    }
    var factorNames = [
        ["3", "Foo"], ["5", "Bar"], ["7", "Qix"], ["0", "*"]
    ];
    var str = factorNames.filter(function ([factor]) {
        return value % factor === 0;
    }).map(function ([ignore, name]) {
        return name;
    }).join("");
    var matchingFactorIter = matchingFactorIterator(factorNames);
    var suffix = value.split("")
        .map(matchingFactorIter)
        .join("");
    var valueStar = value.replace("0", "*");
    if (str || valueStar.split("").find(matchingFactorIter)) {
        return str + suffix;
    }
    return valueStar;
};
