import type { Meta, StoryObj } from '@storybook/react';
import Greeting from './Greeting';

const meta = {
	title: 'Example/Greeting',
	component: Greeting,
	parameters: { renderer: 'react' },
} satisfies Meta<typeof Greeting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Named: Story = {
	args: { name: 'Storybook' },
};
