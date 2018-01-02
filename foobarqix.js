function hasFactorAsDigit(names, value) {
    return value.split("").filter(function (digit) {
        return names.has(digit);
    }).length > 0;
}
function namedFactors(names, value) {
    return Array.from(names.keys())
        .filter((factor) => (value % factor === 0))
        .map((factor) => names.get(factor))
        .join("");
}
function namedDigits(names, value) {
    return value.split("").map(function (digit) {
        return names.get(digit) ||
            (digit === "0"
                ? "*"
                : "");
    }).join("");
}
function foobarqix(value) {
    if (!value || typeof value !== "string") {
        return "";
    }
    var names = new Map([
        ["3", "Foo"],
        ["5", "Bar"],
        ["7", "Qix"]
    ]);
    var str = namedFactors(names, value);
    var suffix = namedDigits(names, value);
    if (!str && !hasFactorAsDigit(names, value)) {
        return value.replace("0", "*");
    }
    return str + suffix;
}
