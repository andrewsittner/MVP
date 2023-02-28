const express = require('express')
const app = express()
const port = 3000
const getByGenre = require('./helpers/rawgAPI')
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/games', (req, res) => {
  getByGenre(req.query.genre)
  .then(data => res.json(data))
  .catch(err => console.log(err, 'err in express get by genres'))
  
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})