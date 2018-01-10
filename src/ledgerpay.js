const request = require('request');

/**
 * Make payment request to LedgerAPI
 * @param {Object} data - payment request data
 * @param {Object} data.seller - seller information
 * @param {String} data.seller.address - Ripple address of seller
 * @param {String} data.seller.emailAddress - email address of seller
 * @param {String} data.seller.name - name of seller
 * @param {Number} data.seller.tag - tag of seller
 * @param {Object} amount - amount for payment
 * @param {Number} amount.value - value of the transaction
 * @param {String} amount.currency - currency of the transaction
 * @param {Object} item - item being purchased
 * @param {String} item.name - name of item
 * @param {String} logo - logo of your company
 * @param {String} webhookURL - webhook URL which will be called after the transaction was made or failed
 * @returns {Promise} - returns promise containing data that includes the token
 */

 exports.makeRequest = function(data) {

    return new Promise((resolve, reject) => {

        request('http://localhost:9779', (error, response, body) => {

            if(error) {
                reject(error);
            }
            else {
                resolve(body);
            }
        });
    });
 }
