var globalConf = require('../protractor.conf.js');
var localConf = JSON.parse(JSON.stringify(globalConf));
localConf.specs = '../reports/report2300.spec.ts';
exports.config = localConf;
