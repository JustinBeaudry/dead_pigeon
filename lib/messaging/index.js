/*
 *	Dead Pigeon, Message Management
 */
var _new = require('./new.js'),
	get  = require('./get.js'),
	up   = require('./update.js'),
	kill = require('./kill.js');

exports.new  = _new.new;
exports.get  = get;
exports.up   = up;
exports.kill = kill;