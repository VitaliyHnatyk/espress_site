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
    client: {
      src: ['./private/js/index.js'],
      dest: 'assets/js/bundle.js'
    }
  });

  console.log("browserify");

  grunt.loadNpmTasks('grunt-browserify');
};