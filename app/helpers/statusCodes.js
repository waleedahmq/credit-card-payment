const config = require('../../config/app');

/**
 * Function to map the client response status codes
 * @param {status code that needed to mapped to some meaningful form for client response} code 
 * @returns the status code for client response
 */
module.exports = (code) => {
    return config.STATUS_CODES[code];
};