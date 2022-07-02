"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function getObservableBeer() {
    var source = (0, rxjs_1.from)([
        { name: 'Apple Juice', country: 'France', price: 2.25 },
        { name: 'Orange Juice', country: 'US', price: 3.35 },
        { name: 'Pineapple Juice', country: 'Japan', price: 1.75 }
    ]);
    return new rxjs_1.Observable(function (observer) {
        source.forEach(function (juice) { return observer.next(juice); }).then();
        observer.complete();
    });
}
getObservableBeer().subscribe(function (juice) { return console.log("Subscriber got ".concat(juice.name, " that costs ").concat(juice.price, " jd")); }, function (error) { return console.error(error); }, function () { return console.log("The stream is over"); });
