module.exports.connections = {
  mongodb: {
    adapter: 'sails-mongo',
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/invoicedb' 
   }
};
