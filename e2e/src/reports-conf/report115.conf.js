var globalConf = require('./protractor.conf.js');
var localConf = JSON.parse(JSON.stringify(globalConf));
localConf['specs'] = '../reports/report115.spec.ts';
exports.config = localConf;
