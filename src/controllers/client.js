const { introduce, albumList, projectTypeList, serviceList } = require('../data/mock');

const baseURL = 'client/pages/';

const clientController = {
    GET_HomePage: function (req, res, next) {
        return res.render(baseURL + 'home/index', {
            layout: 'main',
            title: 'NT E-commerce',
            list: introduce,
            albumList: albumList,
            projectTypeList: projectTypeList,
            serviceList: serviceList,
        });
    },

    GET_ProjectPage: function (req, res, next) {
        return res.render(baseURL + 'project/index', {
            layout: 'main',
            title: 'Dự án tiêu biểu | NTEcommerce',
            list: introduce,
            projectTypeList: projectTypeList,
            albumList: albumList,
        });
    },
};

module.exports = clientController;
