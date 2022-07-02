import {from, Observable} from "rxjs";

function getObservableBeer() {

    const source = from([
        {name: 'Apple Juice', country: 'France', price: 2.25},
        {name: 'Orange Juice', country: 'US', price: 3.35},
        {name: 'Pineapple Juice', country: 'Japan', price: 1.75}
    ]);

    return new Observable((observer) => {
        source.forEach(juice => observer.next(juice)).then();
        observer.complete();
    });
}

getObservableBeer().subscribe(
    juice => console.log(`Subscriber got ${juice.name} that costs ${juice.price} jd`),
    error => console.error(error),
    () => console.log("The stream is over")
);
