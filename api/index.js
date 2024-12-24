const express = require('express');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }))

app.get('/search', (req, res) => {
    const query = req.query.q;
    sneaks.getProducts(query, 24, function(err, products) {
        if (err) {
            return res.status(500).json({ error: 'Something went wrong.' });
        }
        res.json(products);
    })
}) 

app.get('/mostpopular', (req, res) => {
    sneaks.getMostPopular(24, function(err, products){
        res.json(products);
    })
})

app.get('/jordan', (req, res) => {
    sneaks.getProducts("Jordan", 24, function(err, products){
        res.json(products);
    })
})

app.get('/nike', (req, res) => {
    sneaks.getProducts("Nike", 24, function(err, products){
        res.json(products);
    })
})

app.get('/newbalance', (req, res) => {
    sneaks.getProducts("New Balance", 24, function(err, products){
        res.json(products);
    })
})

app.get('/adidas', (req, res) => {
    sneaks.getProducts("Adidas", 24, function(err, products){
        res.json(products);
    })
})

app.get('/puma', (req, res) => {
    sneaks.getProducts("Puma", 24, function(err, products){
        res.json(products);
    })
})

app.get('/crocs', (req, res) => {
    sneaks.getProducts("Crocs", 24, function(err, products){
        res.json(products);
    })
})

app.get('/converse', (req, res) => {
    sneaks.getProducts("Converse", 24, function(err, products){
        res.json(products);
    })
})

app.get('/hoka', (req, res) => {
    sneaks.getProducts("HOKA", 24, function(err, products){
        res.json(products);
    })
})

app.get('/on', (req, res) => {
    sneaks.getProducts("On Running Cloud", 24, function(err, products){
        res.json(products);
    })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`)
})