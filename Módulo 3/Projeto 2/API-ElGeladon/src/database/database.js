const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
      .connect('mongodb+srv://admin:admin@cluster0.tu6masp.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MONGO DB CONECTADO');
      })
      .catch((err) => {
        return console.log(`Erro na conexao com o banco: ${err}`);
      });
  }
  
  module.exports = connectToDatabase;
