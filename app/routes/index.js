const fs = require('fs');

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
        })
    });
};