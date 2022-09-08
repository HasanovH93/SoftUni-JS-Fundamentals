let express = require("express");
let handlebars = require("express-handlebars").create;
const { details } = require("./controllers/catalog");
const catalog = require("./controllers/catalog");
let catalogController = require("./controllers/catalog");

let app = express();

app.engine(
  ".hbs",
  handlebars({
    extname: '.hbs',
  }).engine
);

app.set('view engine', '.hbs')

app.get("/", (req, res) => {
  res.render('home')
});

app.get("/catalog", catalog.catalog);

app.get("/catalog/:productId", catalog.details);

app.listen(3000, () => console.log("Server listening on port 3000"));
