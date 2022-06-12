const fs = require('fs');

/**
 * Bootstraping routes to include them in the app. Function is reading the sub-directories and then files inside them.
 * All the restful routes will be given api version based on the sub-directory name. Base route is being retured from each route file.
 * View routes are being managed differently.
 * @param {express app instance being used to include all routes} app 
 */
exports.bootstrap = app => {
    fs.readdirSync(__dirname).forEach(folder => {
        if (folder === 'index.js') {
            return;
        }
        fs.readdirSync(`${__dirname}/${folder}`).forEach(file => {
            if (file === 'views' || file === 'views.js') {
                const views = require(`${__dirname}/${folder}/${file}`);
                app.use('/', views);
            }
            else {
                const route = require(`${__dirname}/${folder}/${file}`);
                if (!route || !route.router) {
                    return;
                }
                app.use(`/api/${folder}/${route.basePath ? `${route.basePath}` : ''}`, route.router);
            }
        });
    });
};