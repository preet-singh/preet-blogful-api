//now we have the migrations for comments and users (tables) we need the servie object
//as we have for the articles - using the knex instance
'use strict';

const UserService = {
  getAllUsers(knex){
    return knex.select('*').from('blogful_users');
  },
  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into('blogful_users')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.select('*').from('blogful_users').where('id', id).first();
  },
  deleteUser(knex, id){
    return knex.select('*').from('blogful_users').where({ id }).delete();
  },
  updatUser(knex, id, newUserFields) {
    return knex('blogful_users')
      .where({ id })
      .update(newUserFields);
  }
};
module.exports = UserService;