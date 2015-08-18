var crypto = require('../util').crypto,
	fs     = require('../../fs.js').fs;

exports.root = function rootHandler () {
	var msgs = [],
		user = crypto.hash(this.params.user);		

	if (fs.checkIfDir(user)) {
		var files = fs.getDir(user);
		if (files.length > 0) {
			files.forEach(function (file) {
				msgs.push(fs.parse(fs.read(user, file)));
			});
		}
	} else {
		msgs = '';
	}
	this.reply(msgs);
}