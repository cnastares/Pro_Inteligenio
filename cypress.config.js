const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/web/**/*.feature',
    supportFile: false, // Desactivar si no estás usando archivos de soporte
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      addCucumberPreprocessorPlugin(on, config);

      // Configuración para cypress-mochawesome-reporter
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });
      
      on('after:run', async () => {
        await afterRunHook();
      });

      return config;
    },
    baseUrl: 'https://qa.inteligenio.com/', // Sustituye con la URL de tu aplicación
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    },
  },
  // Configuraciones adicionales, como variables de entorno o plugins
});
