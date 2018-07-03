'use strick'

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/ranking', (request, response, next) => {
    response.sendFile(__dirname + '/views/ranking.html');
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/img-gallery.html');
});

app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });
  