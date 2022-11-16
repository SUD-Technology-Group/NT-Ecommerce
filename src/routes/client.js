
const express = require('express');
const { clientController } = require('../controllers');
const router = express.Router();


router.get('/', clientController.GET_HomePage);

// [/du-an]
router.get('/du-an', clientController.GET_ProjectPage);


// [/dich-vu]
router.get('/dich-vu', function (req, res, next) {
    res.render(baseURL + 'service/index', { title: 'NT E-commerce' });
});

module.exports = router;
