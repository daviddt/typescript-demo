module.exports = function(grunt) {

	grunt.initConfig({
    	typescript: {
    		base: {
      			src: 'src/ts/**/*',
      			dest: 'dest/js/scripts.compiled.js',
				options: {
					basePath: 'TypeScript'
				}
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