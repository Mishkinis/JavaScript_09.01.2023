import express from 'express';
import { engine } from 'express-handlebars';
import fs from 'node:fs/promises';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({
    extended: true
}))


app.listen(3000);