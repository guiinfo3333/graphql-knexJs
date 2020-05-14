
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'rowValue1',email: 'antonioguilhermeinfo@gmail.com'},
        { name: 'rowValue2',email:'rafa@gmail.com'}
      ]);
    });
};
