module.exports = {
    // Auth Middle-ware
    /**
     * @param req
     * @param res
     * @param next
     * @returns {Promise<*>}
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
            console.log(err);
            return helper.response(res, true, "Unauthorized!", null, 'UNAUTHORIZED');
        }
    },
};