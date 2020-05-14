const knex = require('../database');   //puxa o index onde tem as configuracoes do knex

module.exports = {


async index(){

const users = await knex('users').select();

 return users;



},
async FindByPk(id){
   
    const users = await knex('users').select().where({id});
    

 
    console.log(users);
     return users;
    
    }
//     ,
// async create(req,res){
//     const {name,email} = req.body;
//     await knex('users').insert({
//         name,
//         email
//     })

// },
// async update(req,res){
//     const {id} = req.params;
//     const {name,email} = req.body;
//     await knex('users')
//     .update({
//         name,
//         email
//     })
//     .where(id)
    
    
// }
}


    


