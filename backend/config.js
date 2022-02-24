const config = {
	appName: process.env.APP_NAME || 'imposter-be',
	environment: (process.env.ENVIRONMENT || 'local').toLowerCase(),
	cors: {
		allowedOrigins: (process.env.CORS_HOSTS || '').split(',').map(allowedOrigin => allowedOrigin.trim()),
	},
	port: process.env.PORT || 4700,
}

module.exports = config
