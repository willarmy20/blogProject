'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.posts.hasMany(models.comments, {foreignKey: 'postID'});
      models.posts.belongsTo(models.users, {foreignKey: 'userID'});
      models.posts.belongsTo(models.categories, {foreignKey: 'categoryID'});
    }
  };
  posts.init({
    userID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};