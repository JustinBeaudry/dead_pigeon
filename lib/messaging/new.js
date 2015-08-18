/*
 *	Dead Pigeon
 *	New Message(s)
 */

var moment = require('moment');

//
// New Message
// @param:  msg  = Message Content
// @param:  to   = Message Recipient
// @param:  from = Message Sender
// @param:  life = Message Life Span
//
exports.new = function _new () {
	var _args = arguments;
	var _argKeys = Object.keys(_args);
	if (_argKeys > 1 && _argKeys < 0) {
		throw new Error('new messages takes only 1 parameter');
	}
	var a, args;
	for (a in _argKeys) {
		args = _args[_argKeys[a]];
	}
	if (!args.msg) {
		throw new Error('Messages require message content');		
	}
	if (!args.to) {
		throw new Error('Messages require a Recipient');
	}
	if (!args.from) {
		throw new Error('Messages require a Sender');		
	}
	if (!args.life) {
		// defaults to 1 day message life
		args.life = moment().add('days', 1).unix();
	}
	console.log(args);
};