'use strict'

import ldapjs from 'ldapjs'

let ldap_client;

class Ldap {
    
	constructor(){
        ldap_client = ldapjs.createClient({ url: process.env.LDAP_SERVER_URL });   
    }
    
    /**
    * @id => userId
    * @password => password
    * @callback => return error or success 
    */    
    addUser(id, password, callBack){                               
        let adminDN = `cn=${process.env.LDAP_ADMIN_USER},${process.env.LDAP_DC}`;  
                                          
        ldap_client
            .bind(adminDN, process.env.LDAP_ADMIN_PASSWORD, (err, res) => {
                if (!err) {
                    let dn = `cn=${id},ou=Users,${process.env.LDAP_DC}`; 
                    let newUser = {
                        cn: id,
                        userPassword: password,
                        objectClass: "person"
                    }
                    
                    ldap_client
                        .add(dn, newUser, (err, response) => {
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
    authenticate(id, password, callBack){        
        let dn = `cn=${id},ou=Users,${process.env.LDAP_DC}`;     
                  
        ldap_client
            .bind(dn, password, (err, res) => {
                 callBack(err, res);
            });           
    } 
    
    
    deleteUser(id){         
        ldap_client
            .del(`cn=${process.env.LDAP_ADMIN_USER},ou=Users,${process.env.LDAP_DC}`, 
            (err, success) => {
                /// Log here the error or msg
            });      
    }
}

module.exports = Ldap;

