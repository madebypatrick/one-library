'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Owner}) {
      // define association here
      // look for bookId
      this.belongsTo(Owner,{foreignKey:'ownerId',as:'owner'})
    }
    toJSON(){
      return{...this.get(),id:undefined,ownerId:undefined}
    }
  }
  Book.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    author: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    genre: {
      type:DataTypes.STRING,
      allowNull:false,
    }
  }, {
    sequelize,
    tableName:'books',
    modelName: 'Book',
  });
  return Book;
};