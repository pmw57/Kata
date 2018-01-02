/*jslint browser*/ /*global window*/
window.results = (function iife() {
    "use strict";
    function itemsReducer(items, value) {
        const text = document.createTextNode(value);
        const li = document.createElement("li");
        items.appendChild(li);
        li.appendChild(text);
        return items;
    }
    function show(callback, limit) {
        var values = Array.from({length: limit}).map((ignore, i) => i + 1);
        var items = values.map(callback)
            .reduce(itemsReducer, document.createDocumentFragment());
        document.querySelector(".results").appendChild(items);
    }

    return {
        show
    };
}());
