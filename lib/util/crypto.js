var crypto = require('crypto');
var bcrypt = require('bcrypt');

exports.hash = function hash (input) {
	var c = crypto.createHash('sha256')
		.update(input)
		.digest('hex');
	return c;
};

exports.crypt = function (input) {
  var digest;
  bcrypt.hash(input, 8, function (err, hash) {
    if (err) throw err;
    digest = hash;
  });
  return digest;
};