USE nodedb;

CREATE TABLE people (
  id int NOT NULL AUTO_INCREMENT, 
  name varchar(50) NOT NULL,
  PRIMARY KEY (id));

INSERT INTO people (name) values ("Charles Albert");
INSERT INTO people (name) values ("Charles Nelson");
INSERT INTO people (name) values ("Charles Bob");
INSERT INTO people (name) values ("Charles Lakes");

COMMIT;
