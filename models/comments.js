'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.belongsTo(models.posts, {foreignKey: 'postID'});
      models.comments.belongsTo(models.users, {foreignKey: 'userID'});
    }
  };
  comments.init({
    userID: DataTypes.INTEGER,
    postID: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};