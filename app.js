const express = require('express');
const slugify = require('slugify');
const products_routes = require('./routes/products.js');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('views'));

app.use(express.json());
app.use('/', products_routes);

app.listen(5000, () => {
  const originalMessage = 'Server is listening on port 5000';

  const slugMessage = slugify(originalMessage, { replacement: '*', lower: false });

  console.log(slugMessage);
});
