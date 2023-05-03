const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefs = require('./data/chef.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Oriental Kitchen Server is Running');
});

app.get('/chefs', (req, res) => {
  res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const selectedChef = chefs.find(c => c.chef_id === id);
  res.send(selectedChef);
})

app.listen(port, () => {
  console.log(`the oriental kitchen is running on ${port}`)
})