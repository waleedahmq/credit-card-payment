const Card = require('../../config/database').Card;

/**
 * Providers forms the third-layer in three layer architecture of node.js. Providers may be considered as data access layer.
 * Providers are the only layer that can interact with database.
 */
const cardProvider = {
    /**
     * Create function is being used to insert new entry in database
     * @param {card object needed to be saved in database} card 
     * @returns newly created object
     */
    create: async (card) => {
        return await Card.create(card);
    },

    /**
     * Find all function is being used to retrieve the list of all entries in database
     * @returns list of all cards present in database
     */
    findAll: async () => {
        return await Card.findAll();
    },

    /**
     * Find one function is being used to retrieve a selective entry from database
     * @param {query or condition that must be the value to match in database} query 
     * @returns 
     */
    findOne: async (query) => {
        return await Card.findOne({ where: query });
    }
};

module.exports = cardProvider;
