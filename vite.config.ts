import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';

export default defineConfig({
	plugins: [
		solid({ ssr: false }),
		unocss(),
	],
});
