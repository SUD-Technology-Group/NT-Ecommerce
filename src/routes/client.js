const { introduce, albumList, projectList, serviceList } = require('../data/mock');
const express = require('express');
const router = express.Router();

const baseURL = 'client/pages/';
// [/]
router.get('/', function (req, res, next) {
    res.render(baseURL + 'home/index', {
        layout: 'main',
        title: 'NT E-commerce',
        list: introduce,
        albumList: albumList,
        projectList: projectList,
        serviceList: serviceList,
    });
});

// [/dich-vu]
router.get('/dich-vu', function (req, res, next) {
    res.render(baseURL + 'service/index', { title: 'NT E-commerce' });
});

router.get('*', function (req, res, next) {
    res.render(baseURL + '404', { title: 'NT E-commerce', layout: '' });
});
module.exports = router;
