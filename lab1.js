"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source = (0, rxjs_1.from)([
    { name: 'Apple Juice', country: 'France', price: 2.25 },
    { name: 'Orange Juice', country: 'US', price: 3.35 },
    { name: 'Pineapple Juice', country: 'Japan', price: 1.75 }
]);
var filteredResult = source.pipe((0, operators_1.filter)(function (person) { return person.price >= 3; }));
console.log("Items over 2JD");
filteredResult
    .subscribe(function (val) { return console.log("- ".concat(val.name)); });
