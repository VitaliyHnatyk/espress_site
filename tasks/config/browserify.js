/**
 * Run Browserify and Reactify.
 *
 * ---------------------------------------------------------------
 *
 */
module.exports = function(grunt) {

  grunt.config.set('browserify', {
    options: {
      transform: [
        require('grunt-react').browserify,
        ['babelify',{ "presets": ["es2015"]}]
      ]

    },
    files: {
        'assets/js/bundle.js':['./private/js/index.js']
    }
   
  });

  console.log("browserify");

  grunt.loadNpmTasks('grunt-browserify');
};