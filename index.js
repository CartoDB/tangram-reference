var fs = require('fs'),
    path = require('path'),
    existsSync = require('fs').existsSync || require('path').existsSync;

var versions = [
    '1.0.0'
];

module.exports.versions = versions;

module.exports.load = function(version) {
    if (versions.indexOf(version) <= -1) {
	throw new Error("Unknown mapnik-reference version: '" + version + "'");
    }
    var ref = require('./1.0.0/reference.json');
 //    var ds_path = path.join(__dirname, version, 'datasources.json');
 //    if (existsSync(ds_path)) {
	// ref.datasources = require(ds_path).datasources;
 //    }
    return ref;
}
