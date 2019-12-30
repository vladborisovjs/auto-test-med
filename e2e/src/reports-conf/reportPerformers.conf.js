var globalConf = require('../protractor.conf.js');
var localConf = JSON.parse(JSON.stringify(globalConf));
localConf.specs = '../reports/reportPerformers.spec.ts';
exports.config = localConf;
