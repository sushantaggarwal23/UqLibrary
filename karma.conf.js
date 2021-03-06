// Karma configuration
// Generated on Mon Nov 21 2016 23:11:20 GMT+1000 (E. Australia Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'http://code.jquery.com/jquery-2.1.4.min.js',
      'webapp/resources/angular.min.js',
      'webapp/resources/angular-resource.min.js',
      'webapp/resources/angular-route.min.js',
      'webapp/resources/angular-material.min.js',
      'webapp/resources/angular-messages.min.js',
      'webapp/resources/angular-animate.min.js',
      'webapp/resources/angular-aria.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'webapp/app.js',
      'webapp/views/addLibrary/controller.js',
      'webapp/routeConfigurations/router.js',
      'webapp/test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
