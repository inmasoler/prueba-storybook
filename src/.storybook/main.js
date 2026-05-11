import tailwindcss from '@tailwindcss/vite';
import { react } from '@storybook-astro/framework/integrations';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx|astro)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      integrations: [react()],
      /**
       * Chromatic (y cualquier Storybook estático en la nube) no tiene el servidor
       * de render Astro en localhost. `static` pre-renderiza historias .astro en el build.
       * En `storybook dev` sigue usándose el middleware local.
       */
      renderMode: 'static',
    },
  },
  async viteFinal(config) {
    config.plugins ??= [];
    config.plugins.unshift(tailwindcss());
    return config;
  },
};