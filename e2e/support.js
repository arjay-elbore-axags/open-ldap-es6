/* global describe, it */
'use strict';

import chai from 'chai';
import nock from 'nock';
import path from 'path';
import supertest from 'supertest';

process.env.ENTITY = '.';
process.env.MIDDLEWARE = '../mobile-middleware';
process.env.START = true;
process.env.NODE_ENV = 'e2e';
process.env.LOG_LEVEL = 'none';
process.env.NO_HTTPS = true;

global.chai = chai;
global.expect = chai.expect;
global.nock = nock;
global.request = supertest;

global.app = require(path.join(path.resolve(process.env.MIDDLEWARE), 'lib', 'server', 'server.js'));
describe('Start', () => it('should wait for start', done => global.app.on('started', () => done())));
