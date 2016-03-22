'use strict';

import AccoutRoutes from './account.route'
import Account from './account'
import { hooker } from 'mw-hooker'

module.exports = (Account) => {         
    Account
        .on('attached', () => {
           let routes = new AccoutRoutes(),
               account = new Account();

            routes.register(Account);
        
            /**
             *  @emailAddress => emailAddress
             *  return status 200 or 404
             */
            Account.verifyEmail = (emailAddress) => {
                account.verifyEmail(emailAddress, 
                    (err, result) => {
                        if (!err){
                            
                        } else {
                            
                        }
                    });        
            };
        });     
};