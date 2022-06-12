const statusCodes = require('./statusCodes');

/**
 * This function is preparing a unanimous response for every kind of the client request
 * @param {response object required to respond to client if required} res 
 * @param {view file name to render} view
 * @param {error flag in case there is some error} error 
 * @param {message needed to be sent in response} message 
 * @param {data object if there is some information requested by client} data 
 * @param {status of the request for meaningful understanding} status 
 * @param {error array flag if there are more then one errors} isErrorArray 
 * @param {version of the api being called by the client} apiVersion 
 * @param {page string to let know the active tab} page
 * @returns response for the client
 */
module.exports = (res, view, error, message, data, status, isErrorArray, apiVersion, page) => {
    view = view || 'home';
    error = error || false;
    isErrorArray = isErrorArray || false;
    message = message || null;
    data = data || null;
    status = status || 'OK';
    apiVersion = apiVersion || 'v1';

    let statusCodeString = statusCodes(status);
    return res.render(view, { title: 'Online Payment System', heading: 'Credit Card Payments', message: message, status: statusCodeString, page, data });
};