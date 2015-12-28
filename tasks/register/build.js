module.exports = function (grunt) {
/*	grunt.registerTask('build', [
		'compileAssets',
		'linkAssetsBuild',
		'clean:build',
		'copy:build'
	]);*/

	grunt.registerTask('build',['compileAssets',"browserify",'linkAssetsBuild',
		'clean:build',
		'copy:build']);
};
