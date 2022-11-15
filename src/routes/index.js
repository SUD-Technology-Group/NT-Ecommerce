const express = require('express');
const router = express.Router();
const clientRouter = require('./client');
const adminRouter = require('./admin');

router.get('*', function (req, res, next) {
    res.render('client/pages/404', { title: 'NT E-commerce', layout: '' });
});

// [/]
router.use('/', clientRouter);

// [/admin]
router.use('/admin', adminRouter);

module.exports = router;
