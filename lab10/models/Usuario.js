const {obterColecao}=require('../database');
function colecao(){return obterColecao('usuarios');}
async function criarUsuario({nome,login,senha}){const ex=await colecao().findOne({login:login.toLowerCase().trim()});if(ex)throw new Error('Login ja cadastrado');return colecao().insertOne({nome:nome.trim(),login:login.toLowerCase().trim(),senha,criadoEm:new Date()});}
async function buscarPorLogin(login){return colecao().findOne({login:login.toLowerCase().trim()});}
module.exports={criarUsuario,buscarPorLogin};
