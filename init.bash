# createdb blogProject_database

# sequelize model:generate --name users --attributes first_name:string,last_name:string,email:string,bio:string

# sequelize model:generate --name categories --attributes title:string,description:string

# sequelize model:generate --name posts --attributes userID:integer,categoryID:integer,title:string,body:string

# sequelize model:generate --name comments --attributes userID:integer,postID:integer,body:string

sequelize db:migrate