require('dotenv').config()

module.exports = {
  "ims": {
    "host": "localhost",
    "port": process.env.DB_PORT || 5432,
    "url": "",
    "database": "ims",
    "password": process.env.DB_PASSWORD,
    "name": "ims",
    "user": process.env.DB_USER,
    "connector": "postgresql"
  }
}
