function expect(actual, expected, msg) {
    console.log(msg);
    if (actual !== expected) {
        console.error(" Expected " + expected + " but got " + actual);
    }
}
// setTimeout(() => window.location = window.location, 2000);

expect(typeof foobarqix, "function", "The foobarqix function exists");
expect(foobarqix(), "", "No arguments should give us an empty string");
expect(foobarqix(""), "", "An empty string should give us an empty string");
expect(foobarqix(1), "", "Only strings should be accepted");
expect(foobarqix("1"), "1", "1 should give 1");
expect(foobarqix("2"), "2", "2 should give 2");
expect(foobarqix("3"), "FooFoo", "3 is divisible by 3, and contains 3");
expect(foobarqix("5"), "BarBar", "5 is divisible by 5 and contains 5");
expect(foobarqix("6"), "Foo", "6 is divisible by 3");
expect(foobarqix("7"), "QixQix", "7 is divisible by 7 and contains 7");
expect(foobarqix("10"), "Bar*", "10 is divisible by 5 and the 0 converts to *");
expect(foobarqix("13"), "Foo", "13 contains a 3");
expect(foobarqix("14"), "Qix", "14 is divisible by 7");
expect(foobarqix("15"), "FooBarBar", "15 is divisible by 3 and 5, and contains 5");
expect(foobarqix("17"), "Qix", "17 contains 7");
expect(foobarqix("21"), "FooQix", "21 is divisible by 3 and 7");
expect(foobarqix("33"), "FooFooFoo", "33 is divisible by 3 and contains two 3's");
expect(foobarqix("51"), "FooBar", "51 is divisible by 3 and contains 5");
expect(foobarqix("53"), "BarFoo", "53 contains 5 and 3");
expect(foobarqix("101"), "1*1", "101 contains a 0 which converts to *");
expect(foobarqix("105"), "FooBarQix*Bar", "105 is divisible by 3 and 5, contains 5 and the 0 converts to *");
expect(foobarqix("303"), "FooFoo*Foo", "303 is divisible by 3, contains two 3's and the 0 converts to *");
expect(foobarqix("10101"), "FooQix**", "10101 is divisible by 3 and 7, and the 0's converts to *'s");
