exports.bootstrap = app => {
    // require('./config/database').bootstrap();

    require('./app/helpers').bootstrap();

    require('./app/routes').bootstrap(app);
};
