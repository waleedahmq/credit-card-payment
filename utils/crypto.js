/**
 * This file is being used to encrypt ot decrypt values.
 */
var CryptoJS = require('crypto-js');
const env = require('../app/helpers/env');

/**
 * Function being used to encrypt the values.
 * @param {text value needed to be encrypted} text 
 * @param {secret key needed to encrypt text} key 
 * @returns encrypted string
 */
function encrypted(text, key) {
    if (!key) key = env('SECRET_KEY', 'secret-key');
    return CryptoJS.AES.encrypt(text, key).toString();
}

/**
 * Function being used to decrypt the values.
 * @param {encrypted value needed to be decrypted} cipher 
 * @param {secret key used to encrypt the value} key 
 * @param {flag to check if there is something in the cipher to be replaced} replace 
 * @param {if something is to be replaced in the cipher, replace with this} replaceWith 
 * @returns decrypted string
 */
function decrypted(cipher, key, replace, replaceWith) {
    if (replace) cipher = cipher.replace(/-/g, "\/");
    if (!key) key = env('SECRET_KEY', 'secret-key');
    var bytes = CryptoJS.AES.decrypt(cipher, key);
    var plain = bytes.toString(CryptoJS.enc.Utf8);
    return plain;
}

module.exports = {
    encrypt: encrypted,
    decrypt: decrypted
};
