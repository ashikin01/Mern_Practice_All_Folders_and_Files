

-- CREATE TABLE user (
--     id INT PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE,
--     password VARCHAR(100) NOT NULL

-- )

ALTER TABLE user
MODIFY COLUMN id VARCHAR(250);