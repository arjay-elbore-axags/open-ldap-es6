'use strict';

import Ldap from './ldap'
import path from 'path'

let ldap, _accountModel;

class Account {
    
    /// TODO: import or inject accountModel
    ///     so that it will not need to inject thru constructor;
    constructor(accountModel){
        _accountModel = accountModel;
        ldap = new Ldap();   
    }
   
    addDigitalAccount(emailAddress, password, callBack){         
        _accountModel.findOne({ email: emailAddress }, 
            (error, account) => {
                if (account){
                    /// 
                } else {
                    /// email is not exist in the database
                    _accountModel.create({ email: emailAddress }, 
                        (error, newAccout) => {
                            if (!error){                                
                                ldap.addUser(newAccout.id, password, (err, res) => {
                                    callBack(error, newAccout); 
                                });                                       
                            }
                        });
                }
            }); 
    }
   
    /** This will check if email is exist in the DB
     *  @emailAddress => emailAddress
     *  @callBack => accepts error & account model
    */
    verifyEmail(emailAddress, callBack){ 
        _accountModel
            .findOne({ email: emailAddress }, 
                (error, account) => {
                    if (!error && account){
                        callBack(error, account);
                    }
                });                     
    }
    
    /**
     *  @emailAddress => emailAddress
     *  @callBack => accepts error & account model
     */
    authenticate(emailAddress, password, callBack){
        _accountModel
            .findOne({ email: emailAddress }, (error, account) => {
                if (!error && account){
                    ldap.authenticate(emailAddress, password,  (error, response) => {
                        callBack(error, response);  
                    });
                }
            });           
    }
    
    /**
     *  @emailAddress => emailAddress
     *  @callback => callback to override return
     *  return status 200 or 404
    */    
    sendVerificationEmail(emailAddress, callback){
        let error = '',
        success = ''
    
        callback(error, success);         
    }
    
    /**
     *  @emailAddress => emailAddress
     *  @callback => callback to override return
     *  return status 200 or 404
    */      
    generateEmailUrl(emailAddress, callBack){
        let error = '',
        success = ''
    
        callback(error, success); 
    }
}

module.exports = Account

