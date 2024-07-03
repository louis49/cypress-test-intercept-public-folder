import { defineConfig } from "cypress";
import viteConfig from './vite.config';

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        ...viteConfig,
        mode: 'testing',
        optimizeDeps: {exclude: ['vuetify']},
        //base: ''
      },
    },
    //devServerPublicPathRoute: '',
    excludeSpecPattern: ['dist/**'],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

});
