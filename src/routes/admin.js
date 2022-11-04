const express = require('express');
const router = express.Router();

var baseURL = 'admin/pages/';
// [/admin/]
router.get('/', function (req, res, next) {
    res.render(baseURL + 'home/index', { title: 'NT E-commerce', layout: 'admin' });
});

// [/admin/dich-vu]
router.get('/dich-vu', function (req, res, next) {
    res.render(baseURL + 'service/index', { title: 'NT E-commerce', layout: 'admin' });
});

module.exports = router;
