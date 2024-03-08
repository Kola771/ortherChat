const express = require('express');
const router = express.Router();

// Page d'accueil
router.get("/", function(req, res) {
    if(!req.user)
    {
        return res.redirect('/login');
    } else {
        res.render("index")
    }
})

module.exports = router;