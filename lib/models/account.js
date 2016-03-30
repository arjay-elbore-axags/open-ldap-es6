'use strict';

var _account = require('./account.route');

var _account2 = _interopRequireDefault(_account);

var _account3 = require('./account');

var _account4 = _interopRequireDefault(_account3);

var _mwHooker = require('mw-hooker');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (Account) {
    Account.on('attached', function () {
        new _account2.default().register(Account);

        /**
         *  @emailAddress => emailAddress
         *  return status 200 or 404
         */
        Account.verifyEmail = function (emailAddress, next) {
            Account.findOne({ email: emailAddress }, function (error, account) {
                if (!error) {
                    next(null, 200);
                } else {
                    next(null, 404);
                }
            });
        };

        /**
         *  @emailAddress => 
         *  @callback => 
         *  return => (void)
         */
        Account.sendVerificationEmail = function (emailAddress) {
            account.sendVerificationEmail(emailAddress, function (err, result) {
                if (!err) {} else {}
            });
        };

        /**
         * @emailAddress
         * @password
         */
        Account.authenticate = function (emailAddress, password) {
            account.authenticate(emailAddress, password, function (err, result) {
                if (!err) {
                    next(null, 200);
                }
            });
        };
    });
};