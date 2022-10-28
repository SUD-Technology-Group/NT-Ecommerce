const express = require('express');
const router = express.Router();

// [/]
router.get('/', function (req, res, next) {
    res.render('client/index', { title: 'NT E-commerce' });
});

// [/dich-vu]
router.get('/dich-vu', function (req, res, next) {
    res.render('client/service/index', { title: 'NT E-commerce' });
});


module.exports = router;
