const mysql = require('../config/mysql');

module.exports = (app) => {
   app.get('/', async(req, res, next) => {
      let db = await mysql.connect();
      
      let [characterdata] = await db.execute(
         `SELECT * FROM characters
         INNER JOIN classes ON class_id_fk = classes.class_id
         INNER JOIN statsheet ON characters.statsheet_id_fk = statsheet.statsheet_id 
         INNER JOIN inventory ON inventory_id_fk = inventory.inventory_id
         INNER JOIN resources ON resource_id_fk = resources.resource_id
         INNER JOIN extra ON extra_id_fk = extra.extra_id
         ORDER BY statsheet.level DESC`);
         
      res.render('game', {
         characterdata: JSON.stringify(characterdata)
      });
   });

   app.get('/test', async(req, res, next) => {
      let db = await mysql.connect();
      res.render('test', {
      });
   });

   app.post('/test', (req, res, next) => {
      res.send(req.data);
   });

   app.get('/changelog', async(req, res, next) => {
      let db = await mysql.connect();
      res.render('changelog', {
      });
   });
};