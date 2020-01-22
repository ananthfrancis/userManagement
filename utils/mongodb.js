const MongoClient = require('mongodb').MongoClient,
  f = require('util').format,
  fs = require('fs');
 

 
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_SSL_CA_PATH = process.env.DB_SSL_CA_PATH;
const DB_USER=process.env.DB_USER;
const DB_PASSWORD=process.env.DB_PASSWORD;

let conn;
let ca = [fs.readFileSync("/etc/secret-volume/mongodb-ca.pem")];
let db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect("mongodb://"+DB_USER+":"+DB_PASSWORD+"@"+DB_HOST+"/"+DB_NAME+"?ssl=true",
  {
    sslValidate : true,
    checkServerIdentity: false,
    sslCA: ca
 
  }, function(err, connection) {
        if (err !== null) {
              console.log('DB error: ' + err);
              return err;
              error = err;
          }
        conn = connection;
        db = connection.db(DB_NAME); 
        console.log("Connection is successful");  
  })
  },

  getDb: function() {
    return db;
  }

};