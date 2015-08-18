var dev = {};

dev.devRoutes = [
// DEV ONLY
// Returns Hash Digest of any input
{
	method: 'GET',
	path: '/hash/{input}',
	handler: handlers.dev.hash
},
// DEV ONLY
// Returns Hash Digests of all the users messages
{
	method: 'GET',
	path: '/msg_hashes/{user}',
	handler: handlers.dev.msg_hashes
}];

dev.devCheck = function devCheck (routes) {
	if (conf.dev) {
		dev.devRoutes.forEach(function (route) {
			routes.push(route);
		});		
	}
};

exports.dev = dev;