'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9001,
					base: './'
				}
			}
		},
		less: {
			development: {
				files: {
					"./css/main.css": "./sources/less/main.less"
				}
			}
		},
		watch: {
			less: {
				files: ['./sources/less/**/*.less'],
				tasks: ['less']
			}
		}
	});


grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['connect','less','watch']);

};
