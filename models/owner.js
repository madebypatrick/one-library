'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Book}) {
      // define association here
      this.hasMany(Book,{foreignKey:'ownerId', as:'books'})
    }
    toJSON(){
      return{...this.get(),id:undefined}
    }
  }
  Owner.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    fullname:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Owner must have a name"},
        notEmpty:{msg:"Name cannot be empty"},

      }
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Owner must have an email"},
        notEmpty:{msg:"An email cannot be empty"},
        isEmail:{msg:"Must be a valid email address"}

      }
      
    }
  }, {
    sequelize,
    tableName:'owners',
    modelName: 'Owner',
  });
  return Owner;
};