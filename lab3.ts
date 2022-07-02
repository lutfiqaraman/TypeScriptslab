import {Subject} from "rxjs";

enum Action {
    Buy  = 'Buy',
    Sell = 'Sell'
}

class Order{
    constructor(public orderId: number, public traderId: number, public stock: string,
                public shares:number, public action:Action) {}
}

const orders$ = new Subject<Order>();

class Trader {
    constructor(private traderId: number, private traderName:string) {}

    PlaceOrder(order: Order) {
        orders$.next(order);
    }
}

orders$.subscribe(
    ord => console.log(`Sending to stock exchange the order to ${ord.action} ${ord.shares} shares of ${ord.stock}`));

orders$.subscribe(
    ord => console.log(`Reporting to trade commission the order to ${ord.action} ${ord.shares} shares of ${ord.stock}`));

const trader = new Trader(1, 'Joe');
const order1 = new Order(1, 1, 'IBM', 100, Action.Buy);
const order2 = new Order(2, 1, 'AAPL', 100, Action.Sell);

trader.PlaceOrder(order1);
trader.PlaceOrder(order2);
