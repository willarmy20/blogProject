'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Laquinta",
        last_name: "Williams",
        password: bcrypt.hashSync("test", 8),
        email: "test@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        first_name: "Joe",
        last_name: "Schmoe",
        password: bcrypt.hashSync("test2", 8),
        email: "test2@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        first_name: "Johnny",
        last_name: "Apple",
        password: bcrypt.hashSync("test3", 8),
        email: "test3@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        first_name: "Matt",
        last_name: "Fisher",
        password: bcrypt.hashSync("test4", 8),
        email: "test4@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
