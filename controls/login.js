const express = require('express');
const router = express.Router();
router.use(express.json());
const User = require('./../models/User');
const bcrypt = require('bcrypt');


router.post('/login', (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (user){
            bcrypt.compare(req.body.password, user.password, (err, valid) => {
                if (valid){
                    req.session.userID = user._id;
                    console.log('Logged in user', user._id)
                    res.status('200');
                    res.json({message: 'Succesfully loged in!'})
                } if (!valid){
                    res.status('401');
                    res.json({message: 'Wrong email or password'})
                } if (err){
                    res.status('500');
                    res.json({error: 'Internal server error'}); 
                }
            })
        }else if (err) {
            res.status('500');
            res.json({error: 'Internal server error'}); 
        }else{
            res.status('401');
            res.json({message: 'Wrong email or password'})
        }
    })
})

module.exports = router;