const globalConf = require('../protractor.conf.js');

let localConf = JSON.parse(JSON.stringify(globalConf));

localConf.specs = '../reports/report2121.spec.ts';

exports.config = localConf;