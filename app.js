// indlæs express modulet, dette er vores serverprogram
const express = require('express');
// opret en express applikation 
const app = express();



/* aktiver serverside console.log af side indlæsninger. 
 * Dette sættes op så vi kan følge med i hvilke HTML filer 
 * og ROUTES der forsøges at blive indlæst */
const logger = require('morgan');
app.use(logger('dev', {
   // hvis ALLE requests skal ses i loggen, udkommenter næste linje
   skip: req => (!req.url.endsWith(".html") && req.url.indexOf('.') > -1)
}));



//+ sæt viewengine til ejs 
app.set('view engine', 'ejs');
// peg på den mappe hvor alle views filerne er placeret
app.set('views', './server/views');

//npm install data-and-time --save
app.locals.dateAndTime = require('date-and-time');

/* indlæs alle de routes serveren skal håndtere
 * dette sker igennem en ny fil, for at splitte koden op i smartere blokke */
require('./server/routes/routes.js')(app);

/* sæt serveren op så den kan servere html/css/javascript
 * og billeder direkte fra public mappen, efter alle routes er kørt */
app.use(express.static('public'));



// start serveren på port 3000 
const port = 3000;
app.listen(port, (error) => {
   if (error) console.log(error);
   console.log('\x1b[35m%s\x1b[0m', '================================================================'); // udskriver en lilla streg i konsol
   console.log('Server is listening on port %s, address: %s', port, 'http://localhost:' + port);
});
