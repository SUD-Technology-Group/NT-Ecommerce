const { User } = require('../models');

const UserService = {
    get: async (filter, field) => {
        return await User.findOne(filter, field).lean();
    },

    create: async (payloads) => {
        return await User.create(payloads);
    },

    update: async (filter, payloads) => {
        return await User.findOneAndUpdate(filter, payloads);
    },

    delete: async (filter) => {
        return await User.findOneAndDelete(filter);
    },
};

module.exports = UserService;
