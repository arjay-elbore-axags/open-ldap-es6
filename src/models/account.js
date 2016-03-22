'use strict';

import Ldap from './ldap'

class Account {
    constructor(){
    }
    
    verifyEmail(emailAddress, callback){
         let error = '',
            success = ''
        
        callback(error, success);       
    }
}

module.exports = Account

