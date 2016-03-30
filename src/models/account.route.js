'use strict';

import { Register } from '../utils/register-route' 

class Setup {
    constructor(){
    }
    
    register(model){
        Register(model, {
            "verifyEmail": {
                "description": "Verify a user",
                "accepts": [
                    {
                        "description": "emailAddress to be verify.",
                        "arg": "emailAddress",
                        "type": "string"
                    }
                ],
                "returns": {
                    "arg": "account",
                    "root": true
                },
                "http": {
                    "verb": "post"
                }
            }            
        });        
    }
}

module.exports = Setup;