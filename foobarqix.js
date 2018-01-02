/*jslint browser*/ /*global window*/
window.foobarqix = function foobarqix(value) {
    "use strict";
    var str = "";
    if (value % 3 === 0) {
        str = "Foo";
    }
    if (value === "3") {
        str += "Foo";
    }
    if (!str) {
        return value;
    }
    return str;
};
