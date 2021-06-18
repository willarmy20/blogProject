'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users','bio')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users','bio',Sequelize.STRING)
  }
};
