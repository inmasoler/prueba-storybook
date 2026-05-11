import '../../../global.css';
import Button from './Button.astro';

export default {
	title: 'Actions/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		renderer: 'astro',
		docs: {
			description: {
				component: `
Las clases Tailwind se construyen en **servidor** dentro de \`Button.astro\` (\`base\` + \`variants[variant]\` + props).  
El panel **Code** de Storybook muestra el **archivo de historia** (args en CSF), **no** el HTML final ni la cadena de \`class\` resuelta. No es un fallo de Astro: el snippet de código documenta *cómo usas* el componente, no el resultado del compilador.

**Dónde ver las clases aplicadas:** inspecciona el \`<button>\` o \`<a>\` en el iframe (DevTools del navegador), o cambia args en **Controles** y vuelve a inspeccionar.

### Variantes → clases Tailwind (capa variante; además va el \`base\` común)

| \`variant\` | Clases |
|-------------|--------|
| \`primary\` | \`bg-action hover:bg-action-hover text-action-text border-none\` |
| \`outline\` | \`bg-transparent hover:bg-white/10 text-text-inverse border border-text-inverse/25\` |
| \`dark\` | \`bg-surface-deep hover:bg-surface-emphasis text-text-inverse border-none\` |

**Base común:** \`inline-flex items-center justify-center font-body text-sm font-bold rounded-lg cursor-pointer transition-colors uppercase tracking-widest px-7 py-3.5\`  
**Opcional:** \`fullWidth\` → \`w-full\`; \`class\` (prop) se concatena al final.
`.trim(),
			},
		},
	},
};

export const Primary = {
	args: {
		variant: 'primary',
		slots: { default: 'Primary' },
	},
};

export const Outline = {
	args: {
		variant: 'outline',
		slots: { default: 'Outline' },
	},
	parameters: {
		/* Inverse text — needs a dark surface to match real pages */
		backgrounds: { default: 'surfaceEmphasis' },
	},
};

export const Dark = {
	args: {
		variant: 'dark',
		slots: { default: 'Dark' },
	},
};

export const AsLink = {
	args: {
		variant: 'primary',
		href: '#',
		slots: { default: 'As link' },
	},
};

export const FullWidth = {
	args: {
		variant: 'primary',
		fullWidth: true,
		slots: { default: 'Full width' },
	},
};
