var globalConf = require('e2e/src/reports-conf/protractor.conf.js');
var localConf = JSON.parse(JSON.stringify(globalConf));
localConf.specs = 'reports/reportAviation.spec.ts';
exports.config = localConf;
