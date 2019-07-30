const express = require('express');
const router = express.Router();

router.get('/isauthenticated', (req, res) => {
    if (req.session.userID){
        res.status(200);
        res.send();
    }else{
        res.status(401);
        res.send();
    }
})

module.exports = router;