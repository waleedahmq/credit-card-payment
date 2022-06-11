const config = require('../../config/app');
const crypto = require('../../utils/crypto');

module.exports = (p) => {
    return crypto.decrypt(p, config.SECRET_KEY);
};
