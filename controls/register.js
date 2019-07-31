const express = require('express');
const router = express.Router();
router.use(express.json());
const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/register', (req, res) => {

    User.findOne({email: req.body.email}, (err, user) => {
        if (user) {
            res.status(409);
            res.json({error: 'Email already exists'});
        } else{
            const hash = bcrypt.hashSync(req.body.password, 10);
            const  U1 = new User ({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            })

            U1.save((err, docs) => {
                if (err) {
                    console.log(err);
                    res.status('500');
                    res.json({error: 'Something went wrong'})
                } else{
                    res.status('200');
                    res.json({'succes': 'Succesfully registered new user'});
                }
            });
        }
    })
})

module.exports = router;