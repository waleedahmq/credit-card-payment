/**
 * Bootstraping the different modules in app
 * @param {express app instance needed to include required modules} app 
 */
exports.bootstrap = app => {
    require('./app/routes').bootstrap(app);
};
