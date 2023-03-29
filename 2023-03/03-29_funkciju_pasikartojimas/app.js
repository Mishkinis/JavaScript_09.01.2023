console.log('Labukas!')
console.log('')
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0')
}


// function fun() {
//     console.log('%cFUN', 'color:' + randomColor() + ';')
// }

//pagrinde naudojama funkcija su kintamuoju const/let

const kemDu = 42

const fun = function(param) {
    console.log('%c' + param, 'color:' + randomColor() + ';');
}

fun('Labas');
fun('Kaip tu');
fun('Zuiki?');
console.log('')
//rodykline funkcija

const moreFun = (param) => {
    console.log('%c' + param, 'color:' + randomColor() + ';');
}

//jeigu vienas argumentas tarp "param" () nereikia. jeigu daugiau kintamuju () butini.
// taip pat reikia ir darasyti "return pries console.log jeigu yra daugiau kintamuju()"
const moreMoreFun = param => console.log('%c' + param, 'color:' + randomColor() + ';');

//call back funkcija
const callFun = (callBack) => {
    const symbols = '*'
    console.log('%c' + callBack(symbols), 'color:' + randomColor() + ';');
}

const doText = (what) => {
    return [...Array(10)].join(what);
}

callFun(doText, '-');
console.log('')

fun('Labas');
moreFun('Kaip tu');
moreMoreFun('Zuiki??');
console.log('')

callFun(what => [...Array(10)].join(what));
console.log('')

//atspaudinti elementus is masyvo

const animals = [
    'Racoon',
    'Rabit',
    'Fox'
];

const inerate = (cb, arr) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])
    }
}

inerate(fun, animals)
console.log('')

Array.prototype.doFun = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i])
    }
}

animals.doFun(a => console.log(a))
console.log('')
animals.forEach(a => console.log(a))

console.log('')

// keywords: resizeTo, spread, ref or value, destruction

let A = 5;
let B = A; //A value 5

A++;

console.log(A, B);
console.log('')

let C = [5];
let D = C; // C reference

C[0]++; //bus 6
D[0]++; //pasidaro 7

console.log(C, D)
console.log('')

let E = [5];
let F = [...E];  // make copy

E[0]++;

console.log(E, F);
console.log('');

// "..." isspreadina masyva (Array)
const structure = [4, 5, 6, 7, 8];
console.log([...structure]) //gausim ta pati
console.log({...structure}) //gaunasi object
console.log(...structure)   // tiesiog gauni skaicius, kaip butum spausdines
                            //atskirus skaicius po kablelio.

const obj = {
    color: 'skyblue',
    name: 'Rex',
    big: true
}

obj.color = 'crimson';
console.log(obj);

console.log({...obj}) // objekta galima spreadint tik objekte

console.log({...obj, tractor: 10, color: 'crimson'});

const sum = (...args) => {
    console.log(args)
}

console.log('')
sum(4, 5);
sum(4, 10, 10, 14)

//objekto destruction
//jeigu uzdedi lauztinius skliaustelius objekte reiskia ji destructini.
//tam kad pasiimti objektus kuriu nori
const { color, name, joe} = obj;
console.log(color, name, joe)

//norint pasiimti is array
const [a1, a2] = animals;
console.log(a1, a2)
console.log('')

//IF ternaris
abc = 100;
const ter = abc < 50 ? 'Tiki 50' : (abc < 70 ? 'iki 70' : 'virs 70');

console.log(ter)
console.log('')

const b = () => {
    console.log('big') 
    return 1;
};

const s = () => {
    console.log('small')
    return 1;
};

const z = () => {
    console.log('zuper')
    return 1;
};

abc ? b() : s(); //ternaris taspats, kas butu if(abc)else(b arba s)
console.log('')

b() || s(); //paleidziamos vienu metu su "|| (OR)". || grazina atsakyma tik ta kuris yra pirmas true

console.log('')
b() && s(); //&& grazina jeigu bent vienas ats yra true

console.log('')
b() && s() && z(); //pakeitus i || pasikeicia rezultatas
console.log('')

let rez = 10; // jeigu rez yra ivardintas grazina skaiciu jeigu nea tada stringa(no result)

let print = rez || 'no result';

console.log(print)