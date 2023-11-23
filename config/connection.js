// Set up MySQL connection.
var mysql = require('mysql');
var connection;
// FREE HOSTING OF MySQL https://www.phpmyadmin.co/
  connection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT1,
  });
// } else {
//   // Database is local
//   connection = mysql.createConnection({
//     port: 3306,
//     host: 'localhost',
//     user: 'root',
//     password: 'asdf1234',
//     database: 'burgers_db',
//   });
// }

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
