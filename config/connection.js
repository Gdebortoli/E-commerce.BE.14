// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// Environmental variables 
require('dotenv').config();
// create connection/route to our database

let sequelize;


if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(
        process.env.MYSQL_DB,
        process.env.MYSQL_USER,
        process.env.MYSQL_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306,
        }
    );
}





// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       user: 'root',
//       password: 'password',
//       port: 3306
//     }
//   );

module.exports = sequelize;
