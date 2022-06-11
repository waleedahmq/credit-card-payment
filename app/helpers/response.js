/**
 * This function is preparing a unanimous response for every kind of the client request
 * @param {response object required to respond to client if required} res 
 * @param {error flag in case there is some error} error 
 * @param {message needed to be sent in response} message 
 * @param {data object if there is some information requested by client} data 
 * @param {status of the request for meaningful understanding} status 
 * @param {error array flag if there are more then one errors} isErrorArray 
 * @param {version of the api being called by the client} apiVersion 
 * @returns response for the client
 */
module.exports = (res, error, message, data, status, isErrorArray, apiVersion) => {
    error = error || false;
    isErrorArray = isErrorArray || false;
    message = message || null;
    data = data || null;
    status = status || 'OK';
    apiVersion = apiVersion || 'v1';

    let statusCodeString = helper.statusCodes(status);
    let response = {
        error: error,
        message: message,
        data: data,
        isErrorArray: isErrorArray,
        apiVersion: apiVersion,
        statusCode: statusCodeString,
    };
    return res.status(statusCodeString).json(response);
};