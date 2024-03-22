/// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
// Definindo rotas
app.get('/', (req, res) =>{
 res.send('Bem vindo ao cadastro de clientes.');
});
app.listen(porta, () => { console.log('Servidor rodando') });


(async()=>{
  const database = require('./db');
  const Cliente = require('./models/cliente');
  try{
    const resultado = await database.sync();
    console.log(resultado);
  } catch(error){
    console.log(error);
  }
})
();