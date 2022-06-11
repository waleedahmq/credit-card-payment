const config = require('../../config/app');
const crypto = require('../../utils/crypto');

/**
 * Function that is being used to access crypto functions
 * @param {cipher that is needed to be decrypted} p 
 * @returns the decrypted value
 */
module.exports = (p) => {
    return crypto.decrypt(p, config.SECRET_KEY);
};
