module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'browserify',
		'bower:dev',
		'jst:dev',
		'less:dev',
		'copy:dev'
	]);
};
