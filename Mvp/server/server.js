const express = require('express')
const app = express()
const port = 3000
const {getByGenre} = require('./helpers/rawgAPI')
const bodyParser = require("body-parser");
const passport = require('./passportConfig')
const auth = require("../routes/auth.js")
const path = require('path')
const cors = require('cors')
const connect = require('../database/index')
const getRecommendations = require('./helpers/openApi')
const {getUserGames, updateUserGames } = require('../database/controllers/userControllers')
connect()
app.use(cors())
app.use(require('express-session')({ secret: 'supersecret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended: false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/auth", auth);


app.get('/games', (req, res) => {
  getByGenre(req.query.genre)
  .then(data => res.json(data))
  .catch(err => console.log(err, 'err in express get by genres'))
})

app.post('/userGames', (req, res) => {
  getUserGames(req.body.id)
  .then(data => {res.json(data.games)})
  .catch(err => console.log(err))
})

app.post('/updateGames', (req, res) => {
  updateUserGames(req.body.games, req.body.id)
  .then(data => res.json('games Updated'))
  .catch(err => console.log(err, 'err in add usergames express'))
})

app.post('/getRecommendations', (req, res) => {
  getRecommendations(req.body.games)
  .then(data => res.json(data))
  .catch(err => console.log(err, 'error in getrecommedation express'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist' , 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})