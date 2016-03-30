'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ldapjs = require('ldapjs');

var _ldapjs2 = _interopRequireDefault(_ldapjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ldap_client = void 0;

var Ldap = function () {
    function Ldap() {
        _classCallCheck(this, Ldap);

        ldap_client = _ldapjs2.default.createClient({ url: process.env.LDAP_SERVER_URL });
    }

    /**
    * @id => userId
    * @password => password
    * @callback => return error or success 
    */


    _createClass(Ldap, [{
        key: 'addUser',
        value: function addUser(id, password, callBack) {
            var adminDN = 'cn=' + process.env.LDAP_ADMIN_USER + ',' + process.env.LDAP_DC;

            ldap_client.bind(adminDN, process.env.LDAP_ADMIN_PASSWORD, function (err, res) {
                if (!err) {
                    var dn = 'cn=' + id + ',ou=Users,' + process.env.LDAP_DC;
                    var newUser = {
                        cn: id,
                        userPassword: password,
                        objectClass: "person"
                    };

                    ldap_client.add(dn, newUser, function (err, response) {
                        callBack(err, response);
                    });
                }
            });
        }

        /**
         * @id { String } => userId
         * @password { String } => password
         * @callback { Function } => return error or success 
         */

    }, {
        key: 'authenticate',
        value: function authenticate(id, password, callBack) {
            var dn = 'cn=' + id + ',ou=Users,' + process.env.LDAP_DC;

            ldap_client.bind(dn, password, function (err, res) {
                callBack(err, res);
            });
        }
    }, {
        key: 'deleteUser',
        value: function deleteUser(id) {
            ldap_client.del('cn=' + process.env.LDAP_ADMIN_USER + ',ou=Users,' + process.env.LDAP_DC, function (err, success) {
                /// Log here the error or msg
            });
        }
    }]);

    return Ldap;
}();

module.exports = Ldap;