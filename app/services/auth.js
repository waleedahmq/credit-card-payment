const helper = require('../helpers');

module.exports = {
    /**
     * Authenticate function can be used to see if the user is geniune one and is allowed to access the requested information
     * @param {request object containing all information related to client request} req
     * @param {response object required to respond to client if required} res
     * @param {next function can be called to pass on processing to next function inline} next
     * @returns response if unauthorized
     */
    authenticate: async (req, res, next) => {
        try {
            // check header or url parameters or post parameters for token
            // let token = req.body.token || req.query.token || req.headers['authorization'] || req.headers['Authorization'];
            // if (token) {
            // verifies secret and checks expiry
            // let decoded = await helper.jwt.verifyJWT(token);
            // if (decoded) {
            //     req.user = decoded.user;
            //     req.token = token;
            //     next();
            // } else {
            //     // if there is no token return an error
            //     return helper.response(res, true, "Unauthorized!", null, 'UNAUTHORIZED');
            // }
            // } else {
            //     // if there is no token return an error
            //     return helper.response(res, true, "Unauthorized!", null, 'UNAUTHORIZED');
            // }
            next();
        } catch (err) {
            return helper.response(res, true, "Unauthorized!", null, 'UNAUTHORIZED');
        }
    }
};