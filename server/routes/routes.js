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

   app.get('/test', async(req, res, next) => {
      let db = await mysql.connect();
      let [test] = 100;
      res.render('changelog', {
         "test": test
      });
   });

   app.get('/users', async(req, res, next) => {
      let db = await mysql.connect();
      db.query('SELECT * FROM characters INNER JOIN statsheet ON characters.statsheet_id_fk = statsheet.id INNER JOIN inventory ON inventory_id_fk = inventory.id', 
      (err, rows) => {
			if (err) {
				console.log(`fejl: ${err}`)
				console.log(rows);
				res.send(err)
			} else {
				res.send(rows)
			}
		})
   });
};