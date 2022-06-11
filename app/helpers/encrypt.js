const config = require('../../config/app');
const crypto = require('../../utils/crypto');

/**
 * Function that is being used to access crypto functions
 * @param {value that is needed to be encrypted} p 
 * @returns the encrypted value
 */
module.exports = (p) => {
    return crypto.encrypt(p, config.SECRET_KEY);
};
