//CLASS sukurimas (class gali but tuscias, kad ji galetume panaudot)
//------------- DVIRATININKAS ------------
class color {

    constructor() {
        this.color = Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
    }


}
//------------- BEBRAS ------------
class nicePrint extends color { //sita class vadinama paveldejimo class

    constructor() {
        super();
    }

    printColor() {
    console.log('%c' + this.age, 'background-color:' + this.color + ';');
    }

}

//------------ ANTANAS ------------
class Animal extends nicePrint {

    static forest = 'B I G';

    constructor (age) {
        super();
        if (!age) {
            throw new Error('Animal needs age!');
        } else {
            this.age = age;
        };
    }
    printColor2() {
        console.log('Hello');
    }
};
    // printColor() {
    // console.log('%c' + this.age, 'background-color:' + this.color + ';');
    // printColor() {
    // console.log('%c' + this.constructor.forest, 'background-color:' + this.color + ';')
    // }

//------------- IEVA --------------
const animal1 = new Animal(12);
const animal2 = new Animal(14);

Animal.forest = 'small'
animal1.color = 'pink';

animal2.printColor2();
animal2.printColor();
console.log(animal1, animal2);
console.log(Animal.forest)
console.log('');