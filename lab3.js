"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var Action;
(function (Action) {
    Action["Buy"] = "Buy";
    Action["Sell"] = "Sell";
})(Action || (Action = {}));
var Order = /** @class */ (function () {
    function Order(orderId, traderId, stock, shares, action) {
        this.orderId = orderId;
        this.traderId = traderId;
        this.stock = stock;
        this.shares = shares;
        this.action = action;
    }
    return Order;
}());
var orders$ = new rxjs_1.Subject();
var Trader = /** @class */ (function () {
    function Trader(traderId, traderName) {
        this.traderId = traderId;
        this.traderName = traderName;
    }
    Trader.prototype.PlaceOrder = function (order) {
        orders$.next(order);
    };
    return Trader;
}());
orders$.subscribe(function (ord) { return console.log("Sending to stock exchange the order to ".concat(ord.action, " ").concat(ord.shares, " shares of ").concat(ord.stock)); });
orders$.subscribe(function (ord) { return console.log("Reporting to trade commission the order to ".concat(ord.action, " ").concat(ord.shares, " shares of ").concat(ord.stock)); });
var trader = new Trader(1, 'Joe');
var order1 = new Order(1, 1, 'IBM', 100, Action.Buy);
var order2 = new Order(2, 1, 'AAPL', 100, Action.Sell);
trader.PlaceOrder(order1);
trader.PlaceOrder(order2);
