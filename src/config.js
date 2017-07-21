/* eslint-disable */
require('babel-polyfill');

const environment = {
	development: {
		isProduction: false
	},
	production: {
		isProduction: true
	}
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
	host: process.env.HOST || 'localhost.inspirasikuliner.id',
	port: process.env.PORT,
	apiHost: process.env.APIHOST || 'http://api.inspirasikuliner.id/vx',
	apiPort: process.env.APIPORT,
	app: {
		title: 'Inspirasi Kuliner',
		description: 'Berbagi Inspirasi Bersama.',
		head: {
			titleTemplate: '%s',
			meta: [
				{ name: 'twitter:card', content: 'Berbagi inspirasi bersama' },
				{ name: 'twitter:site', content: '@inspirasikuliner' },
				{ name: 'twitter:title', content: 'inspirasi kuliner' },
				{ name: 'twitter:description', content: 'Berbagi inspirasi bersama' },
				{ name: 'twitter:image', content: 'http://res.cloudinary.com/kodesoft/image/upload/v1490942700/share_facebook_g1mroe.jpg' },
				{ property: 'og:site_name', content: 'inspirasi kuliner' },
				{ property: 'og:image', content: 'http://res.cloudinary.com/kodesoft/image/upload/v1490942700/share_facebook_g1mroe.jpg' },
				{ property: 'og:locale', content: 'id_ID' },
				{ property: 'og:title', content: 'inspirasi kuliner' },
				{ property: 'og:description', content: 'Berbagi inspirasi bersama' },
				{ property: 'og:card', content: 'Berbagi inspirasi bersama' },
				{ property: 'og:site', content: 'http://inspirasikuliner.id' },
				{ property: 'og:creator', content: 'inspirasi kuliner' },
				{ property: 'og:type', content: 'website' },
			]
		}
	}
}, environment);
