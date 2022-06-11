/**
 * Function to get access to the environment variables
 * @param {key that is required from environment variables} key 
 * @param {default value if there is no environment variable matching the key} defaultValue 
 * @returns the environment variable value
 */
module.exports = (key, defaultValue) => {
    return process.env[key] || defaultValue;
};