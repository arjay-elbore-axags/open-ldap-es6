'use strict';

import { Register } from '../utils/register-route' 

class Setup {
    constructor(){
    }
    
    register(model){
        Register(model, {
            "verify": {
                "description": "Authenticate a user",
                "accepts": [
                    {
                        "description": "Type of identifier for user, one of 'mobile', 'email'",
                        "arg": "identifier_type",
                        "type": "string"
                    },
                    {
                        "description": "Value of identifier, e.g. an email address or a mobile phone number",
                        "arg": "identifier",
                        "type": "string"
                    },
                    {
                        "description": "Password for the user",
                        "arg": "password",
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