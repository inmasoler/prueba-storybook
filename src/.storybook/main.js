import tailwindcss from '@tailwindcss/vite';
import { react } from '@storybook-astro/framework/integrations';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|astro)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      integrations: [react()],
    },
  },
  async viteFinal(config) {
    config.plugins ??= [];
    config.plugins.unshift(tailwindcss());
    return config;
  },
};