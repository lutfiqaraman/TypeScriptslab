import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const source = from([
    {name: 'Apple Juice', country: 'France', price: 2.25},
    {name: 'Orange Juice', country: 'US', price: 3.35},
    {name: 'Pineapple Juice', country: 'Japan', price: 1.75}
]);

const filteredResult =
    source.pipe(filter(person => person.price >= 3));

console.log("Items over 2JD");

filteredResult
    .subscribe(val => console.log(`- ${val.name}`));
