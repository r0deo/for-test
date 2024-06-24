import { Sequelize, DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';
import { SqliteDialect } from '@sequelize/sqlite3';
// import sequelize from ('../index')






// creat a model for users that has name and password and email

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
      },
      password: {
        type: DataTypes.password
      },
      email: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };




