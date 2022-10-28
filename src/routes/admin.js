const express = require('express');
const router = express.Router();

// [/admin/]
router.get('/', function (req, res, next) {
    res.render('admin/index', { title: 'NT E-commerce', layout: 'admin' });
});

// [/admin/dich-vu]
router.get('/dich-vu', function (req, res, next) {
    res.render('admin/service/index', { title: 'NT E-commerce', layout: 'admin' });
});

module.exports = router;
