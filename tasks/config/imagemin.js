/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('imagemin', {
		core: {
				expand: true,
				cwd: '.tmp/public/images',
				src: [
					'**/*.{png,jpg,gif,jpeg}',
					'*.{png,jpg,gif,jpeg}'
				],
				dest: 'www/images'
			}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
};
