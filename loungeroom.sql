
Create Table users (
    id SERIAL PRIMARY KEY,
    first_name varchar, 
    last_name varchar,
    email varchar,
    bio varhcar
);

Create Table category (
    id SERIAL PRIMARY KEY,
    title varchar,
    description varchar
);

Create Table posts (
    id SERIAL PRIMARY KEY,
    userID int,
    categoryID int,
    title varchar,
    body varchar 
    userID integer REFERENCES users(id),
    categoryID integer REFERENCES category(id)
);

Table comments (
    id SERIAL PRIMARY KEY,
    userID int ,
    postID int ,
    body varhcar,
    userID integer REFERENCES users(id),
    postID integer REFERENCES post(id)
);
