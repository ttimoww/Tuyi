const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({mes: "Test message."});
})

module.exports = router;