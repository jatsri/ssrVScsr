import express from 'express'
import path from 'path'

import template from './template';
import renderOnServer from './renderOnServer';
import data from './assets/data.json'

const app = express();

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

// start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on ${process.env.PORT || 3000 }`);
});

app.get('/', (req, res) => {
    res.send("Healthy");
});

// server rendered home page
app.get('/server', (req, res) => {
    let initialState = {
        isFetching: false,
        apps: data
    };
    const { content, preloadedState } = renderOnServer(initialState);
    const response = template("Rendered on the server", preloadedState, content);
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
    const response = template("Will be rendered on the client");
    res.setHeader('Cache-Control', 'assets, max-age=604800');
    res.send(response)
});
