const mongoose = require('mongoose');

const connect = async () => {
  mongoose.connect("mongodb://localhost/mvp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection
  db.on('error', () => {
    console.log('mongoose connection error');
  });
  
  db.once('open', () => {
    console.log('mongoose connected successfully');
  });
}

module.exports = connect;

