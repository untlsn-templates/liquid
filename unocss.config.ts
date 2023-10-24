import {
	defineConfig,
	presetUno,
	presetWind,
	presetTypography,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
	transformerCompileClass,
} from 'unocss';
import { presetAio } from 'untcss';
import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
	presets: [
		presetWind(),
		presetUno(),
		presetAio(),
		presetRemToPx(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'Roboto',
			},
		}),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass(),
	],
});
