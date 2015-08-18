/*
 *	Anonymous Communication
 */

var crypto = require('../util').crypto,
	fs     = require('../../fs.js').fs,
	moment = require('moment');

exports.newmsg = (function newMsg () {
	if (!this.payload) { throw new Error('Payload empty.'); }

	var pl = this.payload,
		status = false, 
		msg;

	// @param: to 	(Recipient)
	// @param: from (Sender)
	// @param: msg  (Message)
	// @param: time (Time Stamp)

	// 1) msg should come from the server as an encrypted single string
	// 2) the name of the file can be anything
	(function prepareMsg () {
		var msg = pl,
		   _time = moment().unix(),
		   time = '#time'+_time,
		   to, from;

		function getMsg () {
			if (msg instanceof Object) {
				if (Object.keys(msg) === '') {
					msg = msg;
				} else {
					msg = Object.keys(msg);
				}
			} else {
				msg = '';
			}
			msg += time;
		}
		
		function setup (cb) {
			getMsg();
			var sender = fs.parseSender(msg);
			var recipient = fs.parseRecipient(msg);
			var filename = crypto.hash(msg);
			function _setup(user) {

				var path = 'fs/'+user+'/';								

				if (fs.checkIfDir(sender) === false) {
					var err = 'user does not exist';
					throw new Error(err);
				}
				return path+filename;
			}
			var from =_setup(sender);
			var to = _setup(recipient);

			cb(to, from);
		}

		function writeFiles () {
			setup(function (to, from) {
				// write to the sender
				fs.write(from, msg, function (err, data) {
					if (err) throw err;
				});
				// write to the recipient
				fs.write(to, msg, function (err, data) {
					if (err) throw err;
				});
				status = true;
			});
		}
		writeFiles();
	})();

	this.reply(status);
});