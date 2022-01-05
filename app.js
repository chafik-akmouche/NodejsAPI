// imports
const express = require('express');
const mongoose = require('mongoose');
const chickenRoute = require('./routes/chicken');

const app = express();

mongoose.connect('mongodb+srv://chafik:chafik1234@cluster0.4ap80.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use("/api/chicken", chickenRoute);

module.exports = app;