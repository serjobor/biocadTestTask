// http://localhost:3000/

const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'public', `${page}.html`);

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(createPath('main'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(createPath('analytics'));
});

app.use((req, res) => {
    res
    .status(404)
    .sendFile(createPath('error'));
});