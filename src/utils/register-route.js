'use strict';
let _ = require('lodash');

class Route {
    constructor(model, routes){
        Object.keys(routes).forEach((method) => {
            if (typeof model[method] === 'function') {
                _.assign(model[method], routes[method]);
            } else {
                model.remoteMethod(method, routes[method]);
            }
        });
    }
}

module.exports = (model, routes) => {
    return new Route(model, routes);
}