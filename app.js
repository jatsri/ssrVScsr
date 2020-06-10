import express from 'express'
import path from 'path'

import template from './template';

const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// start the server
app.listen(process.env.PORT || 3000);

// server rendered home page
app.get('/server', (req, res) => {
    const response = template("Rendered on the server", {}, "Hello World");
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send('Rendered on the client')
});
