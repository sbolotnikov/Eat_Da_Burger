// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  read: () => orm.read("burgers"),
  // The variables cols and vals are arrays.
  create: (cols, vals) => orm.create("burgers", cols, vals),
  update: (objColVals, condition) => orm.update("burgers", objColVals, condition),
  delete: condition => orm.delete("burgers", condition)
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
