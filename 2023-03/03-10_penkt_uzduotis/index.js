import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import fs from 'node:fs/promises';
import * as readline from 'node:readline/promises'

import { stdin as input, stdout as output } from 'node:process'

const r1 = readline.createInterface({ input, output})

export let users = []

export function createRandomUser() {
    return {
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate()
    }
}

Array.from({ length: 1}).forEach(() => {
    users.push(createRandomUser())
})

const userStrings = users.map((user) => {
    return `${user.name} ${user.surname}, ${user.email}, ${user.password}, ${user.birthdate.toDateString()}`
})

const login = await r1.question('Login: ')
const password = await r1.question('Password: ')

if(login === 'admin' && password === '1234'){
    const choice = await r1.question('Įrašykite "A", jei norite failą papildyti, arba "R", jei norite peržiūrėti:')

    if(choice.toLocaleUpperCase() === 'A'){
        await fs.appendFile('people.txt', userStrings.join('\n') + '\n')
        console.log(chalk.green('Duomenys faile sėkmingai išsaugoti'))
        r1.close()
    } else if (choice.toUpperCase() === 'R'){
        const data = await fs.readFile('people.txt', 'utf-8')
        console.log(data)
        r1.close()
    } else {
        console.log(chalk.red('Neteisingai pasirinkta reikšmė'))
        r1.close()
    }
} else {
    console.log(chalk.red('Neteisingi prisijungimo duomenys'))
    r1.close()
}