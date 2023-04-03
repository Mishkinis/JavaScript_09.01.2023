class kibiras {
//static priklauso classei
    static visiAkmenys = 0;
    static AKVK () {
        console.log('AKVK', this.visiAkmenys);
    }
//constructor priklauso objektui
    constructor() {
        this.akmenuKiekis = 0;
    }

    pridetiAkmeni() {
        this.akmenuKiekis++;
        this.constructor.visiAkmenys++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log('%c' + this.akmenuKiekis + ' ',
        'background-color: gray; padding: 10px; border-radius:50%;');
    }

    akmenuSkaiciusVisuoseKibiruose() {
        console.log('%c' + this.constructor.visiAkmenys + ' ',
        'background-color: gray; padding: 10px; border-radius:50%;');
    }
}

const k1 = new kibiras();
const k2 = new kibiras();
const k3 = new kibiras();

k1.pridetiAkmeni();

k1.pridetiDaugAkmenu(8);
k2.pridetiAkmeni();
k3.pridetiAkmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();
k3.kiekPririnktaAkmenu();

k1.akmenuSkaiciusVisuoseKibiruose();