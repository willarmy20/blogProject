require('dotenv').config();

module.exports = {
  DB_PW: process.env.DB_PW || null,
  DB_NAME: process.env.DB_NAME || "blogProject_database",
  PP_SECRET: process.env.PP_SECRET,
  PORT: process.env.PORT || 3000
}