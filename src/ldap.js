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
        let ldap_client = ldapjs.createClient({ url: process.env.LDAP_SERVER_URL  });
        
        ldap_client
            .bind(`cn=${id},ou=Users,${process.env.LDAP_DC}`, 
                password, 
                (error) => {
                    callback(error, 'success');
                });      
    } 
}

module.exports = Ldap;

