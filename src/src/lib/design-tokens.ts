/** Nombres de variables CSS de `@theme` en global.css (capa primitiva). */
export const colorPrimitives = [
	{ varName: '--color-navy-0', label: 'Navy 0' },
	{ varName: '--color-navy-200', label: 'Navy 200' },
	{ varName: '--color-navy-400', label: 'Navy 400' },
	{ varName: '--color-navy-600', label: 'Navy 600' },
	{ varName: '--color-navy-700', label: 'Navy 700' },
	{ varName: '--color-green-0', label: 'Green 0' },
	{ varName: '--color-green-200', label: 'Green 200' },
	{ varName: '--color-green-400', label: 'Green 400' },
	{ varName: '--color-green-500', label: 'Green 500' },
	{ varName: '--color-green-600', label: 'Green 600' },
	{ varName: '--color-green-800', label: 'Green 800' },
	{ varName: '--color-neutral-0', label: 'Neutral 0' },
	{ varName: '--color-neutral-100', label: 'Neutral 100' },
	{ varName: '--color-neutral-500', label: 'Neutral 500' },
	{ varName: '--color-neutral-700', label: 'Neutral 700' },
	{ varName: '--color-neutral-900', label: 'Neutral 900' },
] as const;

/** Tokens semánticos (uso en UI). */
export const colorSemantics = [
	{ varName: '--color-surface', label: 'Surface' },
	{ varName: '--color-surface-subtle', label: 'Surface subtle' },
	{ varName: '--color-surface-raised', label: 'Surface raised' },
	{ varName: '--color-surface-emphasis', label: 'Surface emphasis' },
	{ varName: '--color-surface-deep', label: 'Surface deep' },
	{ varName: '--color-surface-footer', label: 'Surface footer' },
	{ varName: '--color-text', label: 'Text' },
	{ varName: '--color-text-muted', label: 'Text muted' },
	{ varName: '--color-text-inverse', label: 'Text inverse' },
	{ varName: '--color-text-inverse-muted', label: 'Text inverse muted' },
	{ varName: '--color-text-accent', label: 'Text accent' },
	{ varName: '--color-text-accent-dark', label: 'Text accent dark' },
	{ varName: '--color-action', label: 'Action' },
	{ varName: '--color-action-hover', label: 'Action hover' },
	{ varName: '--color-action-text', label: 'Action text' },
	{ varName: '--color-action-text-hover', label: 'Action text hover' },
	{ varName: '--color-border', label: 'Border' },
	{ varName: '--color-border-inverse', label: 'Border inverse' },
	{ varName: '--color-feedback-positive', label: 'Feedback positive' },
	{ varName: '--color-feedback-negative', label: 'Feedback negative' },
	{ varName: '--color-tag-info-bg', label: 'Tag info bg' },
	{ varName: '--color-tag-info-text', label: 'Tag info text' },
	{ varName: '--color-tag-success-bg', label: 'Tag success bg' },
] as const;

/** Clases tipográficas de `@layer components` en global.css */
export const textStyleClasses = [
	{ className: 'text-h1', sample: 'Título H1 — Scheherazade' },
	{ className: 'text-h2', sample: 'Título H2 — Scheherazade' },
	{ className: 'text-h3', sample: 'Título H3 — Scheherazade' },
	{ className: 'text-body-l', sample: 'Cuerpo L — Almarai, lectura larga.' },
	{ className: 'text-body-m', sample: 'Cuerpo M — Almarai, párrafo estándar.' },
	{ className: 'text-body-s', sample: 'Cuerpo S — Almarai, texto secundario.' },
	{ className: 'text-label', sample: 'Label — metadata o captions' },
	{ className: 'text-cta', sample: 'CTA — botón textual' },
] as const;

/** Anchuras Tailwind frecuentes (utilidades `w-*`). Cadenas literales para que el JIT las incluya. */
export const tailwindWidthSamples = [
	'w-0',
	'w-px',
	'w-0.5',
	'w-1',
	'w-1.5',
	'w-2',
	'w-3',
	'w-4',
	'w-5',
	'w-6',
	'w-8',
	'w-10',
	'w-12',
	'w-16',
	'w-20',
	'w-24',
	'w-32',
] as const;

export const tailwindRadiusSamples = [
	'rounded-none',
	'rounded-sm',
	'rounded',
	'rounded-md',
	'rounded-lg',
	'rounded-xl',
	'rounded-2xl',
	'rounded-3xl',
	'rounded-full',
] as const;
