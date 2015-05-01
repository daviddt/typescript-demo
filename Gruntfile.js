module.exports = function(grunt) {

	grunt.initConfig({
    	typescript: {
    		base: {
      			src: ['TypeScript/src/ts/**/*.ts'],
      			dest: 'TypeScript/dest/js/scripts.compiled.js'
    		}
		},
		watch: {
  			scripts: {
    			files: ['TypeScript/src/ts/*.ts'],
    			tasks: ['typescript'],
    			options: {
      				spawn: false
   				}
			}
		}
  	});

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['typescript']);

};