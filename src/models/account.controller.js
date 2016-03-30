'use strict';

import AccoutRoutes from './account.route'
import DigitalAccount from './account'
import { hooker } from 'mw-hooker'

module.exports = (Account) => {         
    Account
        .on('attached', () => {
            new AccoutRoutes().register(Account);
          
            /**
             *  @emailAddress => emailAddress
             *  return status 200 or 404
             */
            Account.verifyEmail = (emailAddress, next) => {
                Account
                    .findOne({ email: emailAddress }, 
                        (error, account) => {
                            if (!error){
                               next(null, 200); 
                            } else {
                                next(null, 404);
                            }
                        });      
            };
            
            /**
             *  @emailAddress => 
             *  @callback => 
             *  return => (void)
             */
            Account.sendVerificationEmail = (emailAddress) => {
                account.sendVerificationEmail(emailAddress,
                     (err, result) => {
                        if (!err){
                            
                        } else {
                            
                        }                    
                    });
            };
            
            /**
             * @emailAddress
             * @password
             */
            Account.authenticate = (emailAddress, password) => {
                account.authenticate(emailAddress, password, 
                    (err, result) => {
                        if (!err){
                            next(null, 200);
                        }
                    });
            };
            
        });     
};