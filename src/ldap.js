'use strict'

import { ldapjs } from 'ldapjs'

class Ldap {

	constructor(){
    }
    
    /**
    * @id => userId
    * @password => password
    * @callback => return error or success 
    */    
    addUser(id, password, callback){
       let error = '',
           success = ''      
        
        callback(error, success);
    }

    /**
     * @id => userId
     * @password => password
     * @callback => return error or success 
     */
    authenticate(id, password, callback){        
        let error = '',
            success = ''
        
        callback(error, success);
    } 
}

module.exports = Ldap;

