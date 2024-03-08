require('dotenv').config(); // donne accès aux variables d'environnement
const express = require("express");
const app = express();
const path = require("path");
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

// Paramètres de la vue
// Les vues sont dans le dossiers views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// Middlewares
// middleware qui notifie les informations sur les requêtes entrantes telles que la méthode, le endpoint, le code renvoyé 
app.use(logger('dev'));

// middleware utilisé pour améliorer les requêtes entrantes ayant une charge utile (payload) pour les rendre disponible sur l'objet req.body
app.use(express.json()); 

// middleware utilisé pour analyser les requêtes entrantes ayant une chaîne de requête (ex: ?fname=John&lname=Doe) pour les rendre disponible sur l'objet req.body
app.use(express.urlencoded({extend: true})); 

app.use(cookieParser());

// Routes
app.use("/", indexRouter) // On charge toutes les routes se trouvant dans le fichier index.js
app.use("/user", userRouter) // On charge toutes les routes se trouvant dans le fichier user.js
app.use("/", authRouter) // On charge toutes les routes se trouvant dans le fichier auth.js

module.exports = app