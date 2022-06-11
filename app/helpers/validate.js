const { validationResult } = require('express-validator');

/**
 * Validator function that is applying defined rules on the request
 * @param {request object containing all information related to client request} req
 * @param {response object required to respond to client if required} res
 * @param {next function can be called to pass on processing to next function inline} next
 * @returns response to client if there is some validation error
 */
module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return helper.response(res, true, extractedErrors, null, 'VALIDATION_ERR', true);
};