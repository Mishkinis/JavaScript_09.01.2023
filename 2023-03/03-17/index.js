import express from 'express';
import path from 'node:path';
import fs from 'node:fs/promises';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({
    extended: true
}))

const mainAdmin = {
    mail: 'admin@bit.lt',
    passw: '1234'
}

app.get('/', async (req,res) => {
    try {
        await fs.readFile('./database.json', 'utf-8');
      } catch {
        await fs.writeFile('./database.json', JSON.stringify([mainAdmin]));
      }
    res.render('home');
});

app.get('/admin', async (req,res) => {
    res.render('admin');
});

app.post('/save-post', async (req,res) => {
    try {
        let database = await fs.readFile('./database.json', 'utf-8');
    
        database = JSON.parse(database);
    
        database.push(req.body);

        const mail = req.body.mail;
        const passw = req.body.passw;
        
        const user = database.find(user => user.mail === mail && user.passw === passw);

        if (user) {
            res.redirect('/admin');
        } else {
            res.redirect('/');
        }

    } catch {
        await fs.writeFile('./database.json', JSON.stringify([req.body]));
        res.redirect('/');
    }
})

app.post('/save-user', async (req,res) => {
    try {
        let database = await fs.readFile('./database.json', 'utf-8');
    
        database = JSON.parse(database);
    
        database.push(req.body);
    
        await fs.writeFile('./database.json', JSON.stringify(database));
    } catch {
        await fs.writeFile('./database.json', JSON.stringify([req.body]));
    }
    res.redirect('/');
})

app.listen(3000)