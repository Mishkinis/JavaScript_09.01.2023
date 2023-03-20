import fs from 'node:fs/promises';
import readline from 'node:readline/promises'

// const masyvas = [
//     'Radiatorius',
//     'Palange',
//     'Spinta'
// ]

// await fs.writeFile('./database.json', JSON.stringify(masyvas))

// const database = await fs.readFile('./database.json', 'utf-8')

// console.log(JSON.parse(database))

const rl = readline.createInterface(process.stdin, process.stdout)

const vardas = await rl.question('Įveskite savo vardą:\n')

try {
    let database = await fs.readFile('./database.json', 'utf-8')

    database = JSON.parse(database)

    database.push(vardas)

    await fs.writeFile('./database.json', JSON.stringify(database))
} catch {
    await fs.writeFile('./database.json', JSON.stringify([vardas]))
}

rl.close()