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

      let [characters] = await db.execute(
         `SELECT character_name, statsheet.level, classes.class_name FROM characters
         INNER JOIN classes ON class_id_fk = classes.class_id
         INNER JOIN statsheet ON characters.statsheet_id_fk = statsheet.statsheet_id 
         INNER JOIN inventory ON inventory_id_fk = inventory.inventory_id
         ORDER BY statsheet.level DESC`);

      // let products = [
      //    {
      //       "name": "speakers",
      //       "price": 100
      //    },
      //    {
      //       "name": "Vask",
      //       "price": 430
      //    }
      // ];


      res.render('test', {
         title: "hej",
         characters: JSON.stringify(characters)
      });
   });

   app.get('/leaderboard', async(req, res, next) => {
      let db = await mysql.connect();
      let [characters] = await db.execute(
      `SELECT character_name, statsheet.level, classes.class_name FROM characters
      INNER JOIN classes ON class_id_fk = classes.class_id
      INNER JOIN statsheet ON characters.statsheet_id_fk = statsheet.statsheet_id 
      INNER JOIN inventory ON inventory_id_fk = inventory.inventory_id
      ORDER BY statsheet.level DESC`, 
      (err, rows) => {
			if (err) {
				res.send(err)
			} else {
				res.send(rows)
			}
		})
   });
};