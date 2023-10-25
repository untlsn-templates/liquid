/// <reference types="solid-start/env" />
/// <reference types="vite/client" />

import { JSX } from 'solid-js';

declare global {
	type JSXElement = JSX.Element;
	type OnlyChildren<T extends JSXElement = JSXElement> = { children: T }
}


interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
