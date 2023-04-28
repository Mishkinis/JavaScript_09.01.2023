const express = require ('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send(`<h1>${req.query.hello}, ${req.query.who}</h1>`);
});

app.get('/animal/:a', (req, res) => {
    res.send(`<h1>Hello, ${req.params.a} !</h1>`)
});

app.listen(port, () => {
    console.log(`S3 server on port ${port}`);
});