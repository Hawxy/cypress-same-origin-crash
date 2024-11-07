import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    AUTH0_DOMAIN: 'login.au.inxcloud.dev'
  },
  e2e: {
    baseUrl: 'https://home.au.inxcloud.dev',
    viewportWidth: 1920,
    viewportHeight: 1080,
    experimentalOriginDependencies: true,
    experimentalRunAllSpecs: true
  }
});
