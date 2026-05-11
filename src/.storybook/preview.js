import '../global.css';

// @storybook-astro/renderer (dev path) usa crypto.randomUUID al pedir render Astro al servidor.
// En algunos iframes (p. ej. capturas de Chromatic) puede no existir; polyfill mínimo vía getRandomValues.
(() => {
	const c = globalThis.crypto;
	if (!c || typeof c.randomUUID === 'function' || typeof c.getRandomValues !== 'function') return;
	c.randomUUID = () =>
		'10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (ch) =>
			(+ch ^ (c.getRandomValues(new Uint8Array(1))[0] & (15 >> (+ch / 4)))).toString(16)
		);
})();

/** @type {import('storybook').Preview} */
const preview = {
	tags: ['autodocs'],
	parameters: {
		docs: {
			/** Pestaña “Code” en la barra de addons (SB 10: opt-in). */
			codePanel: true,
			canvas: {
				/** Código bajo el lienzo: visible por defecto (además del panel Code). */
				sourceState: 'shown',
			},
		},
		backgrounds: {
			default: 'surface',
			values: [
				{ name: 'surface', value: 'var(--color-surface, #ffffff)' },
				{ name: 'surfaceEmphasis', value: 'var(--color-surface-emphasis, #161f40)' },
				{ name: 'surfaceDeep', value: 'var(--color-surface-deep, #090e1e)' },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
