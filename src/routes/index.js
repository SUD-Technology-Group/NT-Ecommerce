const express = require('express');
const router = express.Router();
const clientRouter = require('./client');
const adminRouter = require('./admin');
const apiRouter = require('./api');
// [/]
router.use('/', clientRouter);

// [/admin]
router.use('/api', apiRouter);
router.use('/admin', adminRouter);
router.get('*', function (req, res, next) {
    res.render('client/pages/404', { title: 'NT E-commerce', layout: '' });
});
module.exports = router;
