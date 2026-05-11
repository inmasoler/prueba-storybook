import type { Meta, StoryObj } from '@storybook/react';
import FoundationsGallery from './FoundationsGallery';

const meta = {
	title: 'Foundations/Overview',
	parameters: {
		layout: 'fullscreen',
		renderer: 'react',
		docs: {
			description: {
				component:
					'Catálogo de tokens (colores, tipografía, espaciado) y muestras de utilidades Tailwind. Los colores muestran el valor RGB resuelto en el iframe de Storybook.',
			},
		},
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const TodosLosTokens: Story = {
	name: 'Tokens y utilidades',
	render: () => <FoundationsGallery />,
};
