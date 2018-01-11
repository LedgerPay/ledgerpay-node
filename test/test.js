const assert = require('assert');
const LedgerPay = require('../index');

describe('LedgerPay', function() {
    describe('#makeRequest()', function() {
        it('should return valid API token', () => {

            return LedgerPay.makeRequest({
                "seller": {
                    "address": "rPDUhy3GTrEZagMhfXvfQVJMJKS6iywQos",
                    "emailAddress": "matt@coffee.com",
                    "name": "Matt Hayward",
                    "tag": 3423434234
                },
                "amount": {
                    "value": 1,
                    "currency": "XRP"
                },
                "item": {
                    "name": "A large coffee"
                },
                "logo": "https://coffee.com/logo.png",
                "webhookURL": "http://payments.coffee.com/webhook"
            })
            .then((response) => {
                assert.notEqual(response, null);
                assert.notEqual(response.data, null);
                assert.notEqual(response.data.token, null);
            })
            .catch((err) => {
                assert.equal(err, null);
            })
        });
    });
});
