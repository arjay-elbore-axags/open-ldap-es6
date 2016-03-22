'use strict'

import { ldapjs } from 'ldapjs'

var ldap_client = Symbol('ldap_client');

class Ldap {
    
	constructor(){
        //this[ldap_client] = ldapjs.createClient({ url: process.env.LDAP_SERVER_URL });
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
    
    
    deleteUser(id){
        var client = this[size];
         
        client.del(`cn=${process.env.LDAP_ADMIN_USER},ou=Users,${process.env.LDAP_DC}`, 
            (err, success) => {
                /// Log here the error or msg
            });      
    }
}

module.exports = Ldap;

