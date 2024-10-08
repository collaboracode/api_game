CREATE ROLE root WITH LOGIN SUPERUSER PASSWORD 'password';

GRANT pg_read_all_data TO postgres;
GRANT pg_write_all_data TO postgres;
GRANT pg_read_all_data TO root;
GRANT pg_write_all_data TO root;

CREATE TABLE users (
  id int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, 
  username varchar(255), 
  email varchar(255), 
  password_hash varchar(255)
);

insert into users (username, email, password_hash) values ('tester', 'testaroni@email.com', 'hassword');