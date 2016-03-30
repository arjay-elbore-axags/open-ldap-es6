'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ldap = require('./ldap');

var _ldap2 = _interopRequireDefault(_ldap);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ldap = void 0,
    _accountModel = void 0;

var Account = function () {

    /// TODO: import or inject accountModel
    ///     so that it will not need to inject thru constructor;

    function Account(accountModel) {
        _classCallCheck(this, Account);

        _accountModel = accountModel;
        ldap = new _ldap2.default();
    }

    _createClass(Account, [{
        key: 'addDigitalAccount',
        value: function addDigitalAccount(emailAddress, password, callBack) {
            _accountModel.findOne({ email: emailAddress }, function (error, account) {
                if (account) {
                    ///
                } else {
                        /// email is not exist in the database
                        _accountModel.create({ email: emailAddress }, function (error, newAccout) {
                            if (!error) {
                                ldap.addUser(newAccout.id, password, function (err, res) {
                                    callBack(error, newAccout);
                                });
                            }
                        });
                    }
            });
        }

        /** This will check if email is exist in the DB
         *  @emailAddress => emailAddress
         *  @callBack => accepts error & account model
        */

    }, {
        key: 'verifyEmail',
        value: function verifyEmail(emailAddress, callBack) {
            _accountModel.findOne({ email: emailAddress }, function (error, account) {
                if (!error && account) {
                    callBack(error, account);
                }
            });
        }

        /**
         *  @emailAddress => emailAddress
         *  @callBack => accepts error & account model
         */

    }, {
        key: 'authenticate',
        value: function authenticate(emailAddress, password, callBack) {
            _accountModel.findOne({ email: emailAddress }, function (error, account) {
                if (!error && account) {
                    ldap.authenticate(emailAddress, password, function (error, response) {
                        callBack(error, response);
                    });
                }
            });
        }

        /**
         *  @emailAddress => emailAddress
         *  @callback => callback to override return
         *  return status 200 or 404
        */

    }, {
        key: 'sendVerificationEmail',
        value: function sendVerificationEmail(emailAddress, callback) {
            var error = '',
                success = '';

            callback(error, success);
        }

        /**
         *  @emailAddress => emailAddress
         *  @callback => callback to override return
         *  return status 200 or 404
        */

    }, {
        key: 'generateEmailUrl',
        value: function generateEmailUrl(emailAddress, callBack) {
            var error = '',
                success = '';

            callback(error, success);
        }
    }]);

    return Account;
}();

module.exports = Account;