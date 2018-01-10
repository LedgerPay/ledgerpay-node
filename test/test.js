const assert = require('assert');
const LedgerPay = require('../index');

describe('LedgerPay', function() {
  describe('#makeRequest()', function() {
      it('should return valid API token', () => {

          LedgerPay.makeRequest()
          .then((response) => {
              assert.notEqual(response, null);
          })
          .catch((err) => {
              assert.equal(err, null);
          })
      });
  });
});
