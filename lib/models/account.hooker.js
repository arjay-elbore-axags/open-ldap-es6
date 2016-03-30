'use strict';
'using strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _account = new Symbol('account');

var AccountHooker = function AccountHooker(account, hooker) {
    _classCallCheck(this, AccountHooker);

    this[_account] = account;
};