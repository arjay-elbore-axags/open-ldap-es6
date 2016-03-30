'use strict';

describe('Account', () => {
    
    describe('#authenticate', () => {
        let request_data;
        
        before(() => {
            request_data = {
                email: 'abc@yahoo.com',
                password: 'password'    
            };
        });
        
        it('should return status 200.', done => {
            request(app)
                .post('/api/accounts/authenticate')
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(request_data)
                .expect(200)
                .end((err, res) => {
                   done();
                });
        }); 
    });  
  
   
});