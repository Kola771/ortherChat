const express = require('express');
const router = express.Router();

// Page d'accueil
router.get("/", function(req, res) {
    console.log(req.cookies);
    res.render("index")
})

module.exports = router;