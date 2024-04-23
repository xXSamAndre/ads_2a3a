const app = require('./app');

require('dotenv').config({path:'variaveis.env'});

app.set('port',process.env.PORTA || 7777); //escolha de uma porta padrão
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: " + server.address().port);
});