'use strict';
let _ = require('lodash');

module.exports = function(model, routes) {
  var methods = Object.keys(routes);

    methods.forEach((method) => {
      // If model already have exsiting method, override route configuration
      // else register new remote method
      if (typeof model[method] === 'function') {
        _.assign(model[method], routes[method]);
      } else {
        model.remoteMethod(method, routes[method]);
      }
  });
}
