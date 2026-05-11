import '../global.css';

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
