const express = require('express');
const router = express.Router();
const session = require('express-session');

router.get('/logout', (req, res) => {
    const userID = req.session.userID;
    req.session.destroy(err => {
        if (err){
            res.status('500')
            res.json({erorr: 'Something went wrong'});
        } else{
            console.log(`Logged out user ${userID}`)
            res.status('200');
            res.json({succes: 'User is logged out'});
        }
    })
});

module.exports = router