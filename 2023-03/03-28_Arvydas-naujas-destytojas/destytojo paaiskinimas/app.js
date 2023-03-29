console.log('%c Hello', 'color:crimson;');

//var a = 5;

// const m = [];
// for (let i = 0; i < 10; i++) {
//     m.push(Math.floor(Math.random() * 11 + 1));
// }
// console.log(m);

// const A = 5;
// const B = 10;

// //if() gauna atsakyma true arba false jeigu uzduotas loginis veiksmas (A > B)
// if (A > B) {
//     console.log('Taip');
// } else {
//     console.log('Ne')
// }

console.log([...Array(10)].map(_ => Math.floor(Math.random() * (11) + 1)));

const m = [];
for (let i = 0; i < 10; i++) {
    m.push(Math.floor(Math.random() * 11 + 1));
}
console.log(m);

let A = 55;

const B = 10;

console.log(typeof A, A);
A = '' + A;
console.log(typeof A, A);
A = +A;
console.log(typeof A, A);
A = !!A
console.log(typeof A, A);
A = +A
console.log(typeof A, A);


if ('' == []) {
    console.log('JO');
} else {
    console.log('NEA');
}