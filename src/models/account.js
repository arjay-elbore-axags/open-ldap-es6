'use strict';

import Ldap from './ldap'
import { AccountRoutes } from '../utils/route' 
import { hooker } from 'mw-hooker'

class Account {
    constructor(account){
      
    }
    
    VerifyEmail(emailAddress, callback){
         let error = '',
            success = ''
        
        callback(error, success);       
    }
}

module.exports = Account

