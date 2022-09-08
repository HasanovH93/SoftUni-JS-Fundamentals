const data = [
  {
    id: "00001",
    name: "Oil filter",
  },
  {
    id: "00002",
    name: "Windshield wiper",
  },
  {
    id: "00003",
    name: "Xenon",
  },
  {
    id: "0004",
    name: "Tires",
  },
];

module.exports = {
  catalog: (req, res) => {
    res.render(`catalog`,{products:data});
  },
  details: (req, res) => {
    console.log(req.params.productId);

    let product = data[req.params.productId];
    res.send(`<h1>Product Details</h1>
        <a href="/catalog">Back to Catalog</a>
        <p>Info about Product ${product}</p>
        <p>${product}</p>`);
  },
};
