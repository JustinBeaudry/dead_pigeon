var crypto = require('../util').crypto,
	fs 	   = require('../../fs.js').fs;

var dev = {};

dev.msg_hashes = function () {
	var hashes = {},
		user = crypto.hash(this.params.user);
	if (fs.checkIfDir(user)) {
		var files = fs.getDir(user);
		if (files.length > 0) {
			files.forEach(function (file) {
				hashes[file] = crypto.hash(fs.read(user, file));
			});
		}
	} else {
		this.reply('There is no user by that name.');
	}
	this.reply(hashes);
};

dev.hash = function () {
  var hash = crypto.crypt(this.params.input);
  console.log(hash);
  this.reply('testing hashing');
};

exports.dev = dev;