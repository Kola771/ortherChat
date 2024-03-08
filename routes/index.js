const express = require('express');
const router = express.Router();

// Page d'accueil
router.get("/", function(req, res) {
    res.end("Hola depuis le fichier index.js !")
})

module.exports = router;