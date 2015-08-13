module.exports = function (grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    '../htdocs/app/app.min.js': ['app/**/*.js']
                }
            }
        },
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    base: 'htdocs',
                    middleware: function (connect, options) {
                        return [
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                //path: 'http://localhost:<%= connect.all.options.port%>'
                path: 'http://localhost/codeigniterangularjs/'
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: [
                    'app/**/*.js',
                    'index.html',
                    'app/**/*.html'
                ],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
        }


    });


    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('dev', [
        'uglify',
        'open',
        //'connect',
        'watch'
    ]);
};
