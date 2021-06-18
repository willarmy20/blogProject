# createdb blogProject_database

# sequelize model:generate --name users --attributes first_name:string,last_name:string,email:string,bio:string

# sequelize model:generate --name categories --attributes title:string,description:string

# sequelize model:generate --name posts --attributes userID:integer,categoryID:integer,title:string,body:string

# sequelize model:generate --name comments --attributes userID:integer,postID:integer,body:string

# sequelize migration:create --name add-password
# sequelize migration:create --name remove-bio

# sequelize seed:generate --name users
# sequelize seed:generate --name categories
# sequelize seed:generate --name posts
# sequelize seed:generate --name comments



# sequelize db:migrate
sequelize db:seed:all