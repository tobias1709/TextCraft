const mysql = require('mysql2/promise'); // rettet: mysql2/promise

module.exports = {
   connect: async function () { // tilføjet: async
      return await mysql.createConnection({ // tilføjet: await
         host: 'localhost',
         user: 'root',
         password: '',
         port: '3306',
         database: 'textcraft'
      });
   }
}