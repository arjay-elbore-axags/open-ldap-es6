import chai from 'chai'
import path from 'path'
import sinon from 'sinon'
import ldapjs from 'ldapjs'

import Ldap from '../src/models/ldap'

chai.should();

describe('Ldap', () => {
    
    afterEach(() => {
        ldapjs.createClient.restore(); 
    });
     
    describe('#addUser', () => {
        it('should return status 200.', () => {
            /** *  Arrange */
            let createClient = function(url) {
                return {
                    bind: function(dn, password, callback) {   
                        callback(null, null);                                     
                    },
                    add: function(dn, newObj, callBack){
                        callBack(null, 200);
                    }
                }
            };
            
            sinon.stub(ldapjs, 'createClient', createClient);
                  
            let ldap = new Ldap(), actual = 0;
            
            /** Act */
            ldap.addUser('1', '******', (err, success) => {
                actual = success;
            });
            
            /** Assert */
            actual.should.equal(200);        
        });          
    });
   
    describe('#authenticate', () => {
        it('should return status 200.', () => {
            /** *  Arrange */
            let createClient = function(url) {
                return {
                    bind: function(dn, password, callBack) {   
                        callBack('error', 200);                                     
                    }
                }
            };
                
            sinon.stub(ldapjs, 'createClient', createClient);

            let ldap = new Ldap(), actual = 0;

            /** Act */
            ldap.authenticate(1, '*****',  (err, success) => {
                actual = success;
            });

            /** Assert */
            actual.should.equal(200);
        }); 
    });
     
});
