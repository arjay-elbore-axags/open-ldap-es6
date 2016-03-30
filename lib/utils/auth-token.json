'use strict';

const jwt = require('mw-jwt');

import jwt from 'mw-jwt'

class AuthToken {
    constructor(){
    }
    
    get(headers){
        if(!headers.authorization) return undefined;

        let [, token] = headers.authorization.split('Bearer ');

        if(!token) return undefined;

        try {
            return jwt.deserialize(token);
        } catch(e) {
            return undefined;
        }
    }
    
    create(userId){
        let token = jwt.create();
        token.set('userId', userId);
        token.set('ttl', TTL);
        token.set('createdAt', + new Date);

        return jwt.serialize(token);        
    }
}

module.exports = AuthToken;