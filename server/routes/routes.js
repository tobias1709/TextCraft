const mysql = require('../config/mysql');

module.exports = (app) => {

   app.get('/', async(req, res, next) => {
      let db = await mysql.connect();
      res.render('game', {
      });
   });

   app.get('/changelog', async(req, res, next) => {
      let db = await mysql.connect();
      res.render('changelog', {
      });
   });
};