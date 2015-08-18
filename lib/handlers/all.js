exports.all = function catchAll () {
	// Only provide blank responses to ANY requests who would normally get a 404
	this.reply();
};