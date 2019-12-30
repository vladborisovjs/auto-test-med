const globalConf = require('../protractor.conf.js');

let localConf = JSON.parse(JSON.stringify(globalConf));

localConf.specs = '../reports/reportDailySummary.spec.ts';

exports.config = localConf;