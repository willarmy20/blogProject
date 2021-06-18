'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        title: "Games",
        description: "A place to talk about upcoming game releases!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: "Coding",
        description: "All things coding related!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: "Cute Things",
        description: "Anything that makes you say 'awwwww'",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        title: "News",
        description: "The latest happenings on planet Earth",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
