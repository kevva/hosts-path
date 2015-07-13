'use strict';
var pathExists = require('path-exists');
var test = require('ava');
var hostsPath = require('./');

test(function (t) {
	t.plan(2);

	pathExists(hostsPath(), function (err, exists) {
		t.assert(!err, err);
		t.assert(exists);
	});
});
