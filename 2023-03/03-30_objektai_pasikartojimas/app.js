//dev tools on live server

const animal = {
    name: 'Bobikas',
    tail: 'short',
    likesSing: false,
    color: {
        hex: '#45d5c5',
        light: true,
        hasSpots: false
    }
};

const what = 'name';
// [] jeigu nori prieiti prie kintamojo savybes
console.log(animal[what]);
//jeigu nori prieiti prie color reikia rasyti .
console.log(animal.color)
//jeigu nori isvardinti visas egzistuojancias savybes
console.log(animal);
//jeigu nori isvardinti visas egzistuojancias savybes. siam objekte nera tvarkos(sudeda random eiliskumu)
//sis objektas vadinamas "neiteruojamu objektu"
for(const prop in animal) {
    console.log(prop);
}
console.log('')
//norint pasiziureti color vidu
for(const prop in animal) {
    console.log(animal[prop]);
}
console.log('')

//masyve tvarka/eiliskumas nesubyra
const arr = [
    'pink',
    'skyblue',
    'crimson',
    'coral'
];
console.log(arr)
console.log('')

//norint pasirinkti masyve tam tikra indexa
console.log(arr[1])

//norint pasitikrinti visa masyvo contenta
console.log('')
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('')

//su background spalvom
for(let i = 0; i < arr.length; i++) {
    console.log(`%c ${arr[i]}`, `background-color: ${arr[i]}`)
}
console.log('')

//vienoje eiluteje. forEach veikia kaip ciklas, bet jis nera ciklas(jis yra masyvo funkcija)
arr.forEach(e => console.log(e));
console.log('')

//pasizymeti su indexais. butinai reikia antro indexo
arr.forEach((e, i) => console.log(e, i))
console.log('')

//norint gauti tiktai indexa. naudojamas _ (ten kur reikia indexo, bet jo nebutina apibudinti)
arr.forEach((_, i) => console.log(i))
console.log('')
arr.forEach((c) => console.log(c))
console.log('')

//map sintaxe yra tokia pati kaip forEach
arr.map((_, i) => console.log(i))
console.log('')
arr.map((c) => console.log(c))
console.log('')

//skirtumas tarp forEach ir map (FE duoda 1 undefined | map duoda 4 undefined)
const FE = arr.forEach((c) => console.log(c))
const MAP = arr.map((c) => console.log(c))

console.log('')
console.log(FE)
console.log(MAP)

//norint prideti prie masyvo *
const MAP2 = arr.map(c => '*' + c + '*')
console.log(MAP2)
console.log('')

//norint pakeista 'coral' elemento reiksme ir pasitikrinti ar tai yra tas stringas, ir ji pakeisti.
const MAP3 = arr.map(c => c === 'coral' ? 'black' : c)
console.log(MAP3)

//naujas masyvas
console.log('')
const arr2 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];

//pakeisti visas spalvas i black. (... reiskia spread)
//reikia () norint spreadint objekta funkcijoje
const MAP4 = arr2.map(c => ({...c, color: 'black'}));

console.log(MAP4)
console.log('')

//su patikrinimu ar yra masyve 'pink' spalva ir ja pakeisti i 'black'
const MAP5 = arr2.map(c => c.color === 'pink' ? {...c, color: 'black'} : c);

console.log(MAP5)
console.log('')

//pakeiciam long i priesingas reiksmes
const MAP6 = arr2.map(c => ({...c, long: !c.long}));

console.log(MAP6)
console.log('')

//norint pakeist daugiau savybiu
const MAP7 = arr2.map(c => ({...c, long: !c.long, id: ++c.id, new: 'Hello'}));
console.log(MAP7)
console.log('')

//find metodas.
//suranda elementa ir ji grazina, bet suranda tik pirma elementa(kuris yra masyve)
const FIND = arr2.find(c => c.color === 'pink')
console.log(FIND)
console.log('')

//ieskom dvieju salygu
const FIND2 = arr2.find(c => c.long && c.color === 'pink')
console.log(FIND2)
console.log('')

//.........
const arr3 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];

//sitas varijantas suranda ir pakeicia orginala i BLUE
const FIND3 = arr3.find(c => c.long && c.color === 'pink')
FIND3.color = 'BLUE'
console.log(arr3)
console.log('')

//Filtras (filtruoti bent kelias salygas, jeigu yra tokios pacios masyve)
//placiai naudojamas, tam kad istrinti duomenis is masyvo(array)
const FILTER = arr2.filter(c => c.color === 'pink')
console.log(FILTER)
console.log('')

const arr4 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];
//filter, kad istrinti(paprastesnis budas negu su splice) istryne 2 elementus su id: 75.
const DELETED = arr4.filter(c => c.id !== 75)
console.log(DELETED)
console.log('')


const arr5 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];

//istrinti pink ir likusius pakeisti i black
const FM = arr5.filter(c => c.color !=='pink').map(c => ({...c, color: 'black'}))
console.log(FM)
console.log('')

//reduce (naudojamas suskaiciuoti kieki, vidurki, suma)
//surasime didziausia elementa
const start = 0;
const BIG = arr5.reduce((result, c) => c.id > result ? c.id : result, start)
console.log(BIG)
console.log('')

//surasime kiek yra pink
const PINK = arr5.reduce((result, c) => c.color === 'pink' ? ++result : result, start)
console.log(PINK)

const arr6 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];
//sort
//pakeisti tvarka (nuo maziausio id: iki didziausio / norint pakeisti nuo didziausio iki maziausio)
//pakeisti minusa vietom
arr6.sort((a, b) => {
    if(a.id > b.id) return 1;
    if(a.id < b.id) return -1;
    return 0;
})
console.log(arr6)
console.log('')

//sutrumpint i viena eilute (sukeitus a.id ir b.id keiciosiu sortas nuo didziausio iki maziausio)
const arr7 = [
    {id: 5, color: 'pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];

arr7.sort((a, b) => b.id - a.id)
console.log(arr7)
console.log('')

//sort pagal didziaja raide
const arr8 = [
    {id: 5, color: 'Pink', long: false},
    {id: 75, color: 'skyblue', long: true},
    {id: 56, color: 'yellow', long: false},
    {id: 75, color: 'pink', long: true},
    {id: 522, color: 'crimson', long: false}
];
arr8.sort((a, b) => b.color.localeCompare(a.color))
console.log(arr8)