const config = require('../../config/app');
const crypto = require('../../utils/crypto');

/**
 * Function that is being used to access crypto functions
 * @param {value that is needed to be hashed} p 
 * @returns the hashed value
 */
module.exports = (p) => {
    return crypto.generateHash(p, config.SECRET_KEY);
};
