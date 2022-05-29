'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 

   await queryInterface.bulkInsert('tbl_todo_lists', [
     {
       id: 1,
       name_todo :  "Mencuci pakaian",
       desc_todo :  "lalalallalalalalallala",
       createdAt : new Date(),
        updatedAt : new Date()
     },
     {
      id: 2,
      name_todo :  "Mencuci Piring",
      desc_todo :  "Lililili",
      createdAt : new Date(),
       updatedAt : new Date()
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('tbl_todo_lists', null, {});
  }
};
