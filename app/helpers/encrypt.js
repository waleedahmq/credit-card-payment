const config = require('../../config/app');
const crypto = require('../../utils/crypto');

module.exports = (p) => {
    return crypto.encrypt(p, config.SECRET_KEY);
};
