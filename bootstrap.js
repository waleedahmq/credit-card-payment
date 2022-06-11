/**
 * Bootstraping the different modules in app
 * @param {express app instance needed to include required modules} app 
 */
exports.bootstrap = app => {
    // require('./config/database').bootstrap();

    require('./app/helpers').bootstrap();

    require('./app/routes').bootstrap(app);
};
