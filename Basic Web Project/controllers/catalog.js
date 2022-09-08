const data = {
    '00001': 'Oil filter',
    '00002':  'Windshield wiper',
    '00003':  'Xenon',
    '0004': 'Tires',

}


module.exports = {
   catalog: (req,res) => {
        res.send(`<h1>Catalog</h1>
        <a href="/">Home</a>
        <p>List Of Products</p>
        <ul>
        ${Object.entries(data).map(e => `<li><a href="/catalog/${e[0]}">${e[1]}</li>`).join("")}
        <ul>`)
    },
    details:(req,res) => {

        console.log(req.params.productId)
    
        let product = data[req.params.productId]
        res.send(`<h1>Product Details</h1>
        <a href="/catalog">Back to Catalog</a>
        <p>Info about Product ${product}</p>
        <p>${product}</p>`)
        
    }
}