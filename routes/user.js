const express = require('express');
const router = express.Router();

// Page d'accueil des utilisateurs
router.get("/", function(req, res) {
    res.end("hello utilisateur");
})

router.get("/user/:id", function(req, res) {
    res.end("hello utilisateur 1");
})

router.get("/user/edit", function(req, res) {
    res.end("hello utilisateur 2");
})

module.exports = router;