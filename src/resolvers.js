const UserController = require('../src/controllers/UserController');
//no graphq eu nao preciso colocar o await


module.exports = {


Query : {
    users: () =>  UserController.index(),
    user : (_, {id}) => UserController.FindByPk(id)
},

Mutation : {
    createUser: (_,{name,email}) => UserController.create(name,email)
} 


}