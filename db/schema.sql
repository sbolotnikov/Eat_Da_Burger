### Schema

-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;

-- USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  url1 VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;