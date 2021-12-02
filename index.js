const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
//error =>  const mongoose = require('mongoose');
//ci dessous accés par n'importe qui a l'api =cors
const cors = require('cors');
// error  => mongoose.set('useFindAndModify', false);
//middleware
app.use(bodyParser.json());
app.use(cors());
//middleware quand l'application est sur le '/' tu envoi a postsRoutes
app.use('/posts', postsRoutes);
//accés localhost port 5500
app.listen(5500, () => console.log('serveur started : localhost 5500'));