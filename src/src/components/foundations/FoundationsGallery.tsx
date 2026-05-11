import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
	colorPrimitives,
	colorSemantics,
	tailwindRadiusSamples,
	tailwindWidthSamples,
	textStyleClasses,
} from '../../lib/design-tokens';

function Section({
	title,
	description,
	children,
}: {
	title: string;
	description?: string;
	children: ReactNode;
}) {
	return (
		<section className="border-b border-border py-10 last:border-b-0">
			<header className="mb-6 max-w-3xl">
				<h2 className="text-h3 text-text">{title}</h2>
				{description ? <p className="mt-2 text-body-s text-text-muted">{description}</p> : null}
			</header>
			{children}
		</section>
	);
}

function ColorSwatchRow({
	varName,
	label,
}: {
	varName: string;
	label: string;
}) {
	const swatchRef = useRef<HTMLDivElement>(null);
	const [computed, setComputed] = useState('');

	useEffect(() => {
		const el = swatchRef.current;
		if (!el) return;
		setComputed(getComputedStyle(el).backgroundColor);
	}, [varName]);

	return (
		<div className="flex flex-wrap items-center gap-3 border-b border-border py-3 last:border-b-0">
			<div
				ref={swatchRef}
				className="h-12 w-28 shrink-0 rounded-md border border-border shadow-sm"
				style={{ backgroundColor: `var(${varName})` }}
			/>
			<div className="min-w-0 flex-1">
				<p className="font-body text-sm font-semibold text-text">{label}</p>
				<code className="text-xs text-text-muted">{varName}</code>
			</div>
			<code className="rounded bg-surface-subtle px-2 py-1 font-mono text-xs text-text-muted">{computed || '—'}</code>
		</div>
	);
}

function SpacingSemanticBar({ varName, label }: { varName: string; label: string }) {
	return (
		<div className="flex flex-wrap items-center gap-4 py-2">
			<div
				className="h-3 max-w-full rounded bg-action"
				style={{ width: `var(${varName})`, minWidth: '4px' }}
			/>
			<div>
				<p className="font-body text-sm font-medium text-text">{label}</p>
				<code className="text-xs text-text-muted">
					{varName} (valor actual según viewport / :root)
				</code>
			</div>
		</div>
	);
}

export default function FoundationsGallery() {
	return (
		<div
			className="min-h-screen bg-surface text-text"
			style={{
				paddingInline: 'var(--space-page)',
				paddingBlock: 'var(--space-section)',
			}}
		>
			<div className="inner">
				<header className="mb-12">
					<p className="section-label">Design system</p>
					<h1 className="section-title">Foundations</h1>
					<p className="section-sub">
						Referencia visual de tokens definidos en <code className="rounded bg-surface-subtle px-1">global.css</code>{' '}
						(@theme) y de utilidades Tailwind usadas con frecuencia. Los valores RGB resueltos se leen del DOM.
					</p>
				</header>

				<Section
					title="Color — primitivos"
					description="Paleta base. En componentes preferir siempre tokens semánticos."
				>
					<div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
						{colorPrimitives.map((t) => (
							<ColorSwatchRow key={t.varName} varName={t.varName} label={t.label} />
						))}
					</div>
				</Section>

				<Section
					title="Color — semánticos"
					description="Roles de color para superficies, texto, acción y feedback."
				>
					<div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-1">
						{colorSemantics.map((t) => (
							<ColorSwatchRow key={t.varName} varName={t.varName} label={t.label} />
						))}
					</div>
				</Section>

				<Section
					title="Tipografía — familias y pesos"
					description="Variables de fuente y peso del tema."
				>
					<div className="grid gap-8 md:grid-cols-2">
						<div>
							<h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-text-muted">Heading</h3>
							<p
								className="text-2xl text-text"
								style={{ fontFamily: 'var(--font-heading)' }}
							>
								Scheherazade New — عنوان عربي
							</p>
							<code className="mt-2 block text-xs text-text-muted">var(--font-heading)</code>
						</div>
						<div>
							<h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-text-muted">Body</h3>
							<p className="text-2xl text-text" style={{ fontFamily: 'var(--font-body)' }}>
								Almarai — نص عربي وجسم لاتيني
							</p>
							<code className="mt-2 block text-xs text-text-muted">var(--font-body)</code>
						</div>
					</div>
					<ul className="mt-8 grid gap-3 sm:grid-cols-2">
						{(
							[
								['--font-weight-regular', 'Regular'],
								['--font-weight-medium', 'Medium'],
								['--font-weight-semibold', 'Semibold'],
								['--font-weight-bold', 'Bold'],
							] as const
						).map(([v, name]) => (
							<li
								key={v}
								className="rounded-lg border border-border bg-surface-raised px-4 py-3"
								style={{ fontWeight: `var(${v})` }}
							>
								<span className="font-body text-text">{name}</span>
								<code className="mt-1 block text-xs text-text-muted">{v}</code>
							</li>
						))}
					</ul>
				</Section>

				<Section
					title="Tipografía — estilos de componente"
					description="Clases globales (.text-h1, .text-body-m, …) definidas en @layer components."
				>
					<div className="flex flex-col gap-8">
						{textStyleClasses.map(({ className, sample }) => (
							<div key={className} className="border-b border-border/80 pb-8 last:border-0 last:pb-0">
								<code className="mb-2 inline-block rounded bg-surface-subtle px-2 py-0.5 text-xs text-text-muted">
									.{className}
								</code>
								<div className={className}>{sample}</div>
							</div>
						))}
					</div>
				</Section>

				<Section
					title="Espaciado — tokens semánticos"
					description="--space-page y --space-section (también responsive en global.css)."
				>
					<div className="max-w-2xl space-y-4 rounded-lg border border-border bg-surface-raised p-6">
						<SpacingSemanticBar varName="--space-page" label="Space page (ancho de barra = token)" />
						<SpacingSemanticBar varName="--space-section" label="Space section" />
					</div>
				</Section>

				<Section
					title="Espaciado — escala Tailwind (anchuras)"
					description="Muestras de utilidades w-* (spacing scale por defecto de Tailwind v4)."
				>
					<div className="overflow-x-auto rounded-lg border border-border bg-surface-subtle p-4">
						<div className="flex min-w-max items-end gap-2">
							{tailwindWidthSamples.map((cls) => (
								<div key={cls} className="flex flex-col items-center gap-2">
									<div className={`h-16 ${cls} rounded-sm bg-action`} title={cls} />
									<code className="max-w-[4.5rem] truncate text-[10px] text-text-muted">{cls}</code>
								</div>
							))}
						</div>
					</div>
				</Section>

				<Section
					title="Radios — utilidades rounded-*"
					description="Curvas habituales de Tailwind aplicadas a cuadrados de acción."
				>
					<div className="flex flex-wrap gap-4">
						{tailwindRadiusSamples.map((cls) => (
							<div key={cls} className="flex flex-col items-center gap-2">
								<div className={`h-16 w-16 bg-action ${cls}`} />
								<code className="text-center text-[10px] text-text-muted">{cls}</code>
							</div>
						))}
					</div>
				</Section>
			</div>
		</div>
	);
}
