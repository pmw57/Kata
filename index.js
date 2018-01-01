/*jslint browser */
var foobarqix = require("./foobarqix.js");
var numbers = Array.from({length: 1000}).map((ignore, i) => i + 1);
document.body.innerHTML += numbers.map(function (num) {
    return foobarqix(num);
}).join(", ");