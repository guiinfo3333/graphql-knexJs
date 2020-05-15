const knex = require('../database');   //puxa o index onde tem as configuracoes do knex

module.exports = {


async index(){

const users = await knex('users').select();

 return users;


},
async FindByPk(id){
   
    const users = await knex('users').select().where({id});

    
     return users[0];  //retorna um array aí eu tenho q pegar a primeira posicao pra eu ter acesso as propriedades
    
    }
    ,
async create(name,email){

 const user =  await knex('users').insert({   //aqui ele só retorna um array e dentro dele tem o id aí eu tenho q criar outro objeto e setar o id para dar tudo certo
        name:name,
        email:email
    })
    const users=[];
    users.id = user[0];
    return users;

}

}


    


