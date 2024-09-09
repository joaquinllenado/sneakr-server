const express = require('express');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());
app.use(express.json());

app.get('/search', (req, res) => {
    const query = req.query.q;
    sneaks.getProducts(query, 20, function(err, products) {
        if (err) {
            return res.status(500).json({ error: 'Something went wrong.' });
        }
        res.json(products);
    })
}) 

app.get('/mostpopular', (req, res) => {
    sneaks.getMostPopular(10, function(err, products){
        res.json(products);
    })
})

app.get('/jordan', (req, res) => {
    sneaks.getProducts("Jordan", 20, function(err, products){
        res.json(products);
    })
})

app.get('/nike', (req, res) => {
    sneaks.getProducts("Nike", 20, function(err, products){
        res.json(products);
    })
})

app.get('/newbalance', (req, res) => {
    sneaks.getProducts("New Balance", 20, function(err, products){
        res.json(products);
    })
})

app.get('/adidas', (req, res) => {
    sneaks.getProducts("Adidas", 20, function(err, products){
        res.json(products);
    })
})

app.get('/puma', (req, res) => {
    sneaks.getProducts("Puma", 20, function(err, products){
        res.json(products);
    })
})

app.get('/crocs', (req, res) => {
    sneaks.getProducts("Crocs", 20, function(err, products){
        res.json(products);
    })
})

app.get('/converse', (req, res) => {
    sneaks.getProducts("Converse", 20, function(err, products){
        res.json(products);
    })
})

app.get('/hoka', (req, res) => {
    sneaks.getProducts("HOKA", 20, function(err, products){
        res.json(products);
    })
})

app.get('/on', (req, res) => {
    sneaks.getProducts("On Running Cloud", 20, function(err, products){
        res.json(products);
    })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`)
})