module.exports = function (grunt) {
    grunt.initConfig({
        env: {
            dev: {
                NODE_ENV : 'development',
                DEST     : 'temp'
            }
        },
        nodemon: {
            all: {
                script: 'app/server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js']
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'coverage/blanket'
                },
                src: ['test/**/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['test/**/*.js']
            },
            'travis-cov': {
                options: {
                    reporter: 'travis-cov'
                },
                src: ['test/**/*.js']
            },
			'test-ci': {
				options: {
					reporter: 'xunit',
					quiet: true,
					require: 'coverage/blanket',
					captureFile: 'xunit.xml'
				},
				src: ['test/**/*.js'],        
			}
        },
        watch: {
            test: {
                files: ['test/**/*.js', 'app/**/*.js'],
                tasks: ['jshint', 'test']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['env:dev', 'watch', 'nodemon']);
    grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('ci', ['mochaTest:test-ci']);
};