const express = require('express');

const app = express();

// Middlewares
app.use('/posts', () => {
    console.log('Middleware running');
})

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

// Listening to the server
app.listen(3000);