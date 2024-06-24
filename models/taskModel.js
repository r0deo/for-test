import User from ('./userModel');
import {Entity, property, hasMany} from '@loopback/repository';






module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
      name: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      status: [
        ['done', 'inProgress', 'notFinished']
      ],
      
    });
  
    return Comment;
  };