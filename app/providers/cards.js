const Card = require('../../config/database').Card;

const cardProvider = {
    create: async (card) => {
        return await Card.create(card);
    },

    findAll: async () => {
        return await Card.findAll();
    },

    findOne: async (query) => {
        return await Card.findOne({ where: query });
    }
};

module.exports = cardProvider;
