'using strict';

let _account = new Symbol('account');

class AccountHooker {
    constructor(account, hooker){
        this[_account] = account;
    }
    
    
}