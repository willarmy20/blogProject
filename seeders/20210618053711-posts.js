'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [
      {
        userID: 4,
        categoryID: 1,
        title: "Check out this sick game",
        body: "What do you guys think, looks promising right?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        categoryID: 1,
        title: "Looking for RTS game",
        body: "Any new RTS style games you would recommend?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        categoryID: 1,
        title: "Feedback",
        body: "Got this cool new game I made, what do you guys think?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        categoryID: 2,
        title: "Javascript",
        body: "It's dope, right? Upvote in the comments below.",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        categoryID: 2,
        title: "Full Stack App",
        body: "Any feedback for someone developing their own full stack app from scratch solo?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        categoryID: 2,
        title: "Node",
        body: "Setting up a Ryan Dahl fan club website, anyone else interested in joining?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 3,
        categoryID: 3,
        title: "Dogs",
        body: "Check out my dog",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        categoryID: 3,
        title: "Panda",
        body: "Check out those dark circles",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        categoryID: 3,
        title: "Animals",
        body: "Gotta love 'em",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        categoryID: 3,
        title: "Tiger cub loose in Houston",
        body: "Post here if you have any new information!",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
