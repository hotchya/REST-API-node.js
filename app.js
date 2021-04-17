const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

// View engine, path definition
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Using body-parser in express
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

// Route definition
app.use('/', routes);

// Run server
app.listen(port, function () {
    console.log('Example app listening on port : ' + port);
});