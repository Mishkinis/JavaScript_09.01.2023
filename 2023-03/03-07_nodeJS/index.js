//nodejs aplinkoje neegzistuoja kintamieji:
//document
//window

// const vardas = 'Jonas'
// let pavarde = 'Jonaitis'

// for(let i =0; i < 500; i++) {
// console.log(`${vardas} ${pavarde}`)
// }

// setInterval(() => console.log('Sveiki visi'), 1000)

// console.log('pakeitimas')

// console.log(process.stdout.columns) - grazina maksimalu simboliu kieki terminalo eiluteje
// console.log(process.stdout.rows) - grazina maksimalu eiluciu kieki terminale

//npm - node package manager
//npm init - naujo projekto sukurimas

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.green('Hello world!'));
console.log(chalk.bgGreenBright.red('Hello world!'));