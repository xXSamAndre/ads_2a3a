//fazer a importação do express
const express = require('express');
const router = require('./routes/index');

//configurações básicas do aplicativo
const app = express();
app.use('/',router);

app.use(express.json());

module.exports = app; //exportando o app, pois iremos importa-lo no servidor




