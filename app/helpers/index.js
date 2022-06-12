const fs = require('fs');
const helper = [];

fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') {
        return;
    }

    const broken = file.split('.');
    const helperName = `${broken[0]}`;

    helper[helperName] = require(`${__dirname}/${file}`);
});

/**
 * Function that is allowing the app to use different helper functions
 */
module.exports = helper;