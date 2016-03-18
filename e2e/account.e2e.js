import request from 'supertest'
import assert from 'assert';
import Ldap from '../src/ldap'

describe('Account', () => {
  let url;
  
  beforeEach(() => {
     url =  'http://localhost:3000';
  }); 
    
  describe('Add Digital Account', () => {      
     it('should return new digital account', function(done) {  
        let result_email = 'abc@yahoo.com';
        let id = '';
                
        request(url)
            .post('/api/accounts/add_user')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
               identifier_type: 'email',
               identifier: 'abc@yahoo.com',
               password: 'abcd'
            })
            .expect(200)
            .end(function(err, res){
                //assert.equal(res.body.email, result_email);
                id = res.body.id;
                 
                done();
            });
     });
     
     ///TODO: delete the inserted account in mongodb & ldap after
     ///    execute 
    afterEach(() => {
        var ldap = new Ldap();
        
        
        
        
        ldap.deleteUser()
    });   
  });
  
});

