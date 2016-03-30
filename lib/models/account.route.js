'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _registerRoute = require('../utils/register-route');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Setup = function () {
    function Setup() {
        _classCallCheck(this, Setup);
    }

    _createClass(Setup, [{
        key: 'register',
        value: function register(model) {
            (0, _registerRoute.Register)(model, {
                "verifyEmail": {
                    "description": "Verify a user",
                    "accepts": [{
                        "description": "emailAddress to be verify.",
                        "arg": "emailAddress",
                        "type": "string"
                    }],
                    "returns": {
                        "arg": "account",
                        "root": true
                    },
                    "http": {
                        "verb": "post"
                    }
                }
            });
        }
    }]);

    return Setup;
}();

module.exports = Setup;