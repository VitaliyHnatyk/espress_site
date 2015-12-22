module.exports = function(grunt) {
  grunt.config.set('babel', {
     options: {
            sourceMap: false,
            modules: "amd" ,
            presets: ['babel-preset-es2015']
        },
        dist: {
            files: {
                './dist/index.js': './private/js/index.js'
            }
      }
  });

	grunt.loadNpmTasks('grunt-babel');
};