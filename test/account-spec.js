'use strict';

import chai from 'chai'
import path from 'path'
import Ldap from '../src/models/ldap'

import Account from '../src/models/account'

chai.should();

describe('Account', () => {
    
    describe('#VerifyEmail', () => {
       
       it('should return 200, if email exisit.', () => {
           var actual = 200, 
               model = {},
               expected = '';
           
           let controller = new Account(model);
           
           let callBack = (error, success) => {
               expected = 200;
           };
           
           controller.VerifyEmail('abc@yahoo.com', callBack);
           
           actual.should.equal(expected);
       });
        
       it('should return 404, if email not exisit.', () => {
           var actual = 404, 
               model = {},
               expected = '';
           
           let controller = new Account(model);
           
           let callBack = (error, success) => {
               expected = 404;
           };
           
           controller.VerifyEmail('abc@yahoo.com', callBack);
           
           actual.should.equal(expected);
       });       
        
    });
    
});