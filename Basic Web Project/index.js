let express = require('express');

let app = express()

app.get('/', (req,res) => {
    res.send(`<h1>Home Page</h1>
    <a href="/catalog">Catalog</a>
    <p>Welcome to our site!</p>`)
} )

app.get('/catalog', (req,res) => {
    res.send(`<h1>Catalog</h1>
    <a href="/">Home</a>
    <p>List Of Products</p>
    <ul>
    <li><a href="/catalog/0001">Product1</li>
    <li><a href="/catalog/0002">Product2</li>
    <ul>`)
})

app.get('/catalog/:productId', (req,res) => {
    res.send(`<h1>Product Details</h1>
    <a href="/catalog">Back to Catalog</a>
    <p>Info about Product 1</p>`)
    
})


app.listen(3000)


