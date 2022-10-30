const express = require('express');
const router = express.Router();

var admin = 'admin/pages/';
// [/admin/]
router.get('/', function (req, res, next) {
  res.render(admin + 'home/index', { title: 'NT E-commerce', layout: 'admin' });
});

// [/admin/dich-vu]
router.get('/dich-vu', function (req, res, next) {
  res.render('admin/service/index', { title: 'NT E-commerce', layout: 'admin' });
});

module.exports = router;
