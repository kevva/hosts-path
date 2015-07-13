'use strict';
var path = require('path');

module.exports = function () {
	if (process.platform === 'win32') {
		return path.join(process.env.SYSTEMROOT, '/System32/drivers/etc/hosts');
	}

	return '/etc/hosts';
};
