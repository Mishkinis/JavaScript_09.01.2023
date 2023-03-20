import express from 'express'
import path from 'node:path'

const app = express()

// kelio(route'o) aprasymas
app.get('/', (uzklausa, atsakymas) => {
    atsakymas.send('<h1>Serveris veikia</h1>')
})

app.get('/titulinis', (uzklausa, atsakymas) => {
    atsakymas.sendFile(path.resolve('./templates/home.html'))
})

app.listen(3000)