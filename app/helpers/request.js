let requestObject = null;

/**
 * This function can be used to store the client request if required
 * @param {request object containing all information related to client request} req 
 */
module.exports.setRequest = (req) => {
    requestObject = req;
};

/**
 * This function can be used to retrieve the client request stored previously
 * @returns request object containing all information related to client request
 */
module.exports.getRequest = () => {
    return requestObject;
};