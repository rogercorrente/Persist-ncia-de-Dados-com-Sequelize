//importando bibliotecas e arquivos
const database = require('./db');
const Cliente = require('./models/cliente');

/// criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');
//Setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));


// Definindo rotas
app.get('/', (req, res) =>{
 res.send('Bem vindo ao cadastro de clientes.');
});

app.get("/cadcliente", function(req, res){
  res.render('formCliente');
})


app.listen(porta, () => { console.log('Servidor rodando') });


(async()=>{
  try{
    const resultado = await database.sync();
    console.log(resultado);
  } catch(error){
    console.log(error);
  }
})
();