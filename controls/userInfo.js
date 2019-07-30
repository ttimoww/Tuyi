const express = require('express');
const router = express.Router();
const User = require('./../models/User');

// Only when user is logged in else 403
router.get('/userinfo', (req, res) => {
    if(req.session.userID){
        User.findById(req.session.userID, (err, user) => {
            if (err){
                res.status('404');
                res.json({error: 'Cant find user'});
            } else if (user){
                res.status('200');
                res.json({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    availability: user.availability
                })
            }
        })
    } else{
        res.status('401');
        res.json({error: 'User is not logged in'});
    }
})

module.exports = router;