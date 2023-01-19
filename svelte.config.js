import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		// This is needed when the app is deployed in github pages
		// because the app is not served from the root of the domain
		// but from a subdirectory
		// https://kit.svelte.dev/docs#configuration-base
		// But it is only needed if not using the Build and Deploy workflow
		// paths: {
		//	base: dev ? '' : '/allan-luna'
		// },

		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			preprocess: false,
			strict: true
		})
	}
};

export default config;
