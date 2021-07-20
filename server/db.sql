CREATE DATABASE perntodo;

CREATE TABLE posts (
    -- item_id: add `id` to make each item unique
    -- PRIMARY KEY: indicates this column will make this `item` unique
    -- SERIAL: increase PRIMARY KEY to ensure uniqueness
    post_id SERIAL PRIMARY KEY, 
    -- max char length
    description VARCHAR(255)
)
