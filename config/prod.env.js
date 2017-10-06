var env = {
	RELEASE: JSON.stringify(process.env.npm_package_version),
	NODE_ENV: '"production"',
	APP_ENV: '"dev"'
}

if (process.env.npm_config_env) {
	env.APP_ENV = JSON.stringify(process.env.npm_config_env);
	switch (process.env.npm_config_env) {
		case 'qa':
			env.API_ROOT = '"https://x"';
			break;
		case 'production':
			env.API_ROOT = '"https://x"';
			break;
	}
}

module.exports = env;
