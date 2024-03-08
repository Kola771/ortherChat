const http = require("node:http")
const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

// Paramètres de la vue
app.set('view engine', 'pug')
// Middlewxares

// Routes
app.use("/", indexRouter) // On charge toutes les routes se trouvant dans le fichier index.js
app.use("/user", userRouter) // On charge toutes les routes se trouvant dans le fichier user.js

const server = http.createServer(app)

server.listen(port, () => {
    console.log("Serveur en cours...");
})

