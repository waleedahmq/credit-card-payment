const appConfig = require('../../config/app');

module.exports = (code) => {
    return appConfig.STATUS_CODES[code];
};