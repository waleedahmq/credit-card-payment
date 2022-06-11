const fs = require('fs');

/**
 * Function that is allowing the app to use different helper functions
 * @param {just a nothing paramater that is not required in processing} _ 
 */
exports.bootstrap = _ => {
    global['helper'] = [];

    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') {
            return;
        }

        const broken = file.split('.');
        const helperName = `${broken[0]}`;

        global['helper'][helperName] = require(`${__dirname}/${file}`);
    })
};