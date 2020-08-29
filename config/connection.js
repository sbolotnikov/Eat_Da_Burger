// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if (typeof process.env.JAWSDB_URL !="undefined") {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'asdf1234',
        database: 'burgers_db'
    })
};
// var connection = mysql.createConnection({
//   host: "us-cdbr-east-02.cleardb.com",
//   port: 3306,
//   user: "b33c0c3b2bbb19",
//   password: "e7bb66c2",
//   database: "heroku_f13818dc98aac07"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
