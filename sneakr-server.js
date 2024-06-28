const express = require('express');
const cors = require('cors');
const SneaksAPI = require('sneaks-api');

const app = express();
const sneaks = new SneaksAPI();

app.use(cors());
app.use(express.json());

app.get('/mostpopular', (req, res) => {
    sneaks.getMostPopular(6, function(err, products){
        res.json(products);
    })
})

app.get('/jordan', (req, res) => {
    sneaks.getProducts("Jordan", 6, function(err, products){
        res.json(products);
    })
})

app.get('/nike', (req, res) => {
    sneaks.getProducts("Nike", 6, function(err, products){
        res.json(products);
    })
})

app.get('/newbalance', (req, res) => {
    sneaks.getProducts("New Balance", 6, function(err, products){
        res.json(products);
    })
})

app.get('/adidas', (req, res) => {
    sneaks.getProducts("Adidas", 6, function(err, products){
        res.json(products);
    })
})

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`)
})

