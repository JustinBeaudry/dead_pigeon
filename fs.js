var fs = require('fs');

var filesystem = {};
var _base = __dirname+'/fs/';


/*
 *	Node fs Abstractions
 */

filesystem.checkIfDir = function checkDir(user) {
	return fs.existsSync(_base+user);
};

filesystem.getDir = function getDir(user) {
	return fs.readdirSync(_base+user);
};

filesystem.mkDir = function makeDir(dir) {
	fs.mkdirSync(dir);
};

filesystem.read = function readFile(user, file) {
	return fs.readFileSync(_base+user+'/'+file).toString();
};

filesystem.write = function writeFile (filename, data, cb) {
	fs.writeFile(filename+'.dp', data, function () {
		cb();
	});
};

/*
 *  File Parsing
 */

function split (file) {
	return file.split('#');
}

filesystem.parse = function parseFile (file) {
	var obj = {};
	var _f = split(file);

	if (_f.length > 0) {
		_f.forEach(function (f) {
			if (f.match(/^to/)) {
				obj.to = f.replace(/^to/, '');
			}
			else if (f.match(/^from/)) {
				obj.from = f.replace(/^from/, '');
			}
			else if (f.match(/^msg/)) {
				obj.msg = f.replace(/^msg/, '');
			}
			else if (f.match(/^time/)) {
				obj.time = f.replace(/^time/, '');
			}
		});
		return obj;
	}
};

filesystem.parseSender = function parseSender (file) {
	var fileArray = split(file);
	var fileRegEx = /^from/;
	var _file;

	if (fileArray.length > 0) {
		fileArray.forEach(function (f) {
			if (f.match(fileRegEx)) {
				_file = f.replace(fileRegEx, '');
			}
		});
		return _file;
	}
};

filesystem.parseRecipient = function parseRecipient (file) {
	var fileArray = split(file);
	var fileRegEx = /^to/;
	var _file;

	if (fileArray.length > 0) {
		fileArray.forEach(function (f) {
			if (f.match(fileRegEx)) {
				_file = f.replace(fileRegEx, '');
			}
		});
		return _file;
	}
};

exports.fs = filesystem;
