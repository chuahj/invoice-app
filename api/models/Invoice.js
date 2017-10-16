/**
 * Invoice.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    customerName: {
      type: 'string'
    },
    modelName :{
      type: 'string'
    },
    // Add a reference to phones
    /*phones :{
      collection : 'phones',
      via: 'modelName'
    }*/
  },
  connection: 'mongodb'
};

