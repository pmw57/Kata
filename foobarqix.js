module.exports = (function iife() {
    "use strict";
    function foobarqix(n) {
        var terms = [];
        terms["3"] = "Foo";
        terms["5"] = "Bar";
        terms["7"] = "Qix";
        terms["*"] = "*";
        var str = "";
        if (n < 1) {
            return str;
        }
        if (n % 3 === 0) {
            str += terms[3];
        }
        if (n % 5 === 0) {
            str += terms[5];
        }
        if (n % 7 === 0) {
            str += terms[7];
        }
        n = String(n).split("").map(function (char) {
            if (char === "0") {
                return "*";
            }
            return char;
        }).join("");
        if (str === "") {
            str = n;
        } else {
            str += String(n).split("").filter(function (char) {
                return terms[char];
            }).map(function (char) {
                return terms[char];
            }).join("");
        }
        return str;
    }
    return foobarqix;
}());