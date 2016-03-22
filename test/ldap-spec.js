import chai from 'chai'
import path from 'path'
import Ldap from '../src/models/ldap'

chai.should();

describe('Ldap', () => {
  
   /// This serve as behavior (authenticate)
//    describe('authenticate digital account', () => {
//       let _ldap;
      
//       beforeEach(() => {
//          _ldap = new Ldap(); 
//       });
            
//       /// This is specs or scenario (valid user account) 
//       it('returns valid user account.', () => {
//           let _actual = ''; 
//           let callback = function(error, success){
//               _actual = 'valid user.';
//           };
          
//           _ldap.authenticate(1, '******', callback);
          
//           _actual.should.equal('valid user.');
//       });
       
//       /// This is specs or scenario (invalid user account)
//       it('returns invalid user account.', () => {
//           let _actual = '';          
//           let callback = function(error, success){
//               _actual = 'invalid user.';
//           };
          
//           _ldap.authenticate(1, '******', callback);
          
//           _actual.should.equal('invalid user.');          
//       });
//    });
   
   
   describe('#addUser', () => {
           
      it('should return status 200.', () => {
          let _ldap = new Ldap();
          
          let _actual = ''; 
          let callback = function(error, success){
              _actual = 200;
          };      
      
          _ldap.addUser(1, '*****', callback);
    
          _actual.should.equal(200);
      });
      
      it('should return error on adding account', () => {
          let _ldap = new Ldap();
          
          let _actual = ''; 
          let callback = function(error, success){
              _actual = 'error on adding user account.';
          }; 
          
          _ldap.addUser(1, '*****', callback);
          
          _actual.should.equal('error on adding user account.');
      });    
   });
});
