'use strict';

import chai from 'chai'
import path from 'path'
import sinon from 'sinon'
import ldapjs from 'ldapjs'

import Ldap from '../src/models/ldap'
import Account from '../src/models/account'

chai.should();

describe('Account', () => {
    
    let createClient = (url) => {
        return {
            bind: function(dn, password, callback) {   
                callback(null, null);                                     
            },
            add: function(dn, newObj, callBack){
                callBack(null, 200);
            }                
        }          
    };
    
    describe('#verifyEmail', () => {
        before(() => { sinon.stub(ldapjs, 'createClient', createClient);  });
        
        after(() => { ldapjs.createClient.restore(); });
        
        it('should return digital account object.', () => {
            /** Arrange */
            let expected_account = { id: 1 };
            
            let _accountModel = {
                findOne: function(filter, callBack) {          
                    callBack(null, expected_account);
                }          
            };

            let account = new Account(_accountModel),
                actual = {};
            
            /** Act */
            account.verifyEmail('abc@yahoo.com', (error, obj) => {
                actual = obj;
            });

            /** Assert */
            actual.should.equal(expected_account);
        });    
    });
    
    describe('#addDigitalAccount', () => {
        before(() => { sinon.stub(ldapjs, 'createClient', createClient);  });
        
        after(() => { ldapjs.createClient.restore(); });
        
        it('should create digital account.', () => {
            /** Arrange */
            
            let expected_account = { id: 1 },
                actual = {};
            
            let _accountModel = {
                findOne: function(filter, callBack) {          
                    callBack(null, null);
                },
                create: function(newObj, callBack) {
                    callBack(null, expected_account);
                }          
            };   
                                
            let account = new Account(_accountModel); 
                                                           
            /** Act */
            account
                .addDigitalAccount('abc@yahoo.com', '******', (error, obj) => {
                    actual = obj;
                });
            
            /** Assert */
            actual.should.equal(expected_account);
        }); 
    });
    
    describe('#sendVerificationEmail', () => {        
    });
    
    describe('#generateEmailUrl', () => {       
    });
    
    describe('#authenticate', () => {
        let expected_account;
        
        before(() => { 
            expected_account = { id: 1 };
            
            sinon.stub(ldapjs, 'createClient', (url) => {
                return {
                    bind: (dn, password, callBack) => {
                        callBack(null, expected_account);
                    }
                }
            });  
        });
        
        after(() => { ldapjs.createClient.restore(); });
        
        it('should authenticate digital account.', () => {
           /** Arrange */
           let _accountModel = {
                findOne: function(filter, callBack) {          
                    callBack(null, expected_account);
                }          
            };
 
           let account = new Account(_accountModel),
               actual = {};                      
           
           /** Act */
           account.authenticate('abc@yahoo.com', '******', (error, obj) => {
                actual = obj;
           });
                      
           /** Assert */
           actual.should.equal(expected_account);
        });
                
    });
    
});