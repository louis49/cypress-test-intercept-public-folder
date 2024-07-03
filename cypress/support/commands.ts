import { mount as cyMount } from 'cypress/vue';
import vuetify from "@/plugins/vuetify";

Cypress.Commands.add('mount', (component, options = {}) => {
  const { global: globalOptions, ...restOptions } = options;

  const mergedOptions = {
    ...restOptions,
    global: {
      ...globalOptions,
      plugins: [
        ...(globalOptions?.plugins || []),
        vuetify,
      ],
      provide: {
        ...(globalOptions?.provide || {}),
      },
    },
  };
  return cyMount(component, mergedOptions);
});