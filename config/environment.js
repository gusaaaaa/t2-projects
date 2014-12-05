/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 't2-projects',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    navBarPath: '/api/v1/navbar',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.apiHost = "http://localhost:5000";
  }

  if (environment === 'staging') {
    ENV.apiHost = "http://t2-staging.neo.com";
  }

  if (environment === 'production') {
    ENV.apiHost = "http://t2.neo.com";
  }

  return ENV;
};
