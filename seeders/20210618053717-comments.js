'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        userID: 1,
        postID: 1,
        body: "Comment1",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        postID: 1,
        body: "Comment2",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        postID: 1,
        body: "Comment3",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        postID: 2,
        body: "Comment4",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        postID: 2,
        body: "Comment5",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 3,
        postID: 3,
        body: "Comment6",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        postID: 3,
        body: "Comment7",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        postID: 5,
        body: "Comment8",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 3,
        postID: 6,
        body: "Comment9",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        postID: 6,
        body: "Comment10",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        postID: 7,
        body: "Comment11",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        postID: 8,
        body: "Comment12",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        postID: 8,
        body: "Comment12",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        postID: 9,
        body: "Comment13",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 1,
        postID: 10,
        body: "Comment14",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 2,
        postID: 10,
        body: "Comment15",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 3,
        postID: 10,
        body: "Comment16",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        userID: 4,
        postID: 10,
        body: "Comment17",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
