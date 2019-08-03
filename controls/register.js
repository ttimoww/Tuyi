const express = require('express');
const router = express.Router();
router.use(express.json());
const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/register', (req, res) => {

    User.findOne({email: req.body.email}, (err, user) => {
        if (err){
            res.status(500);
            res.send();
        }
        else if (user) {
            res.status(409);
            res.json({error: 'Email already exists', duplicate: 'email'});
        } else{

            User.findOne({userName: req.body.userName}, (err, user) => {
                if (err){
                    res.status(500);
                    res.send();
                }
                else if (user) {
                    res.status(409);
                    res.json({error: 'Username already taken', duplicate: 'username'});
                } else{
                    const hash = bcrypt.hashSync(req.body.password, 10);
                    const  U1 = new User ({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        userName: req.body.userName,
                        email: req.body.email,
                        password: hash
                    })

                    U1.save((err, user) => {
                        if (err) {
                            console.log(err);
                            res.status('500');
                            res.json({error: 'Something went wrong'})
                        } else{
                            console.log(`Registered user ${user._id}`)
                            req.session.userID = user._id;
                            res.status('200');
                            res.json({'succes': 'Succesfully registered new user'});
                        }
                    });
                }
            })
        }
    })
})

module.exports = router;