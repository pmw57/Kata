/*jslint browser*/ /*global window*/
window.foobarqix = function foobarqix(value) {
    "use strict";
    if (typeof value !== "string") {
        return foobarqix(String(value));
    }
    var str = "";
    if (value % 3 === 0) {
        str = "Foo";
    }
    if (value.includes("3")) {
        str += "Foo";
    }
    if (!str) {
        return value;
    }
    return str;
};
