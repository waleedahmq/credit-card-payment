/**
 * Function being used to check account number with the Luhn's algorithm
 * @param {account number excluding check digit} accountNumber 
 * @param {check digit should be exact match to processed value} check 
 * @returns flag if account number is valid or not
 */
module.exports = (accountNumber, check) => {
    let totalDigits = accountNumber.length;
    let sum = 0;
    for (let i = 1; i < totalDigits + 1; i++) {
        let digit = parseInt(accountNumber[i - 1]);
        if ((i % 2) === 0) digit = digit * 2;
        if (digit > 9) digit = digit - 9;
        sum = sum + digit;
    }
    return (10 - (sum % 10)) === parseInt(check);
}
