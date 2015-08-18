/*
 *    Dead Pigeon
 *    Anonymous Communication
 */

var Hapi     = require('hapi');
	conf     = require('./config/config.json'),
	server   = new Hapi.Server(conf.host, conf.port, conf.opts),
	handlers = require('./lib/handlers'),
	dev = require('./dev').dev;

var routes = [
// Catch-all
{
	method: '*',
	path: '/{p*}',
	handler: handlers.all
},
// Get Messages
{
	method: 'GET',
	path: '/{user}',
	handler: handlers.root
},
// New Message
{
	method: 'POST',
	path: '/new',
	handler: handlers.newmsg
}];

dev.devCheck(routes);
server.route(routes);

server.start(function () {
	console.log('Server started at:  '+server.info.uri+'\nCTRL+C to quit');
});