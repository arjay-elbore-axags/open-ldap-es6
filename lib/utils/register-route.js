'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ = require('lodash');

var Route = function Route(model, routes) {
    _classCallCheck(this, Route);

    Object.keys(routes).forEach(function (method) {
        if (typeof model[method] === 'function') {
            _.assign(model[method], routes[method]);
        } else {
            model.remoteMethod(method, routes[method]);
        }
    });
};

module.exports = function (model, routes) {
    return new Route(model, routes);
};