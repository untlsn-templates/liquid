import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		solid({ ssr: false }),
		unocss(),
		autoImport({
			imports: [
				'solid-js',
				'@solidjs/router',
			],
			dts: 'src/types/auto-import.d.ts',
		}),
	],
});
