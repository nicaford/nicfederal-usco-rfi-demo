module.exports = function(grunt) {
    grunt.initConfig({
        nunjucks: {
            options: {
                data: grunt.file.readJSON('data.json'),
                paths: ['templates', 'templates/layouts']
            },
            render: {
                files: [
                    {
                        expand: true,
                        cwd: 'templates/pages',
                        src: [
                            '**/*.njk',
                            '!**/_*.njk'
                        ],
                        dest: './',
                        ext: '.html'
                    }
                ]
            }
        },
        less: {
            dev: {
                files: {
                    'css/app.css' : 'less/app.less'
                }
            }
        },
        postcss: {
          options: {
            processors: [
              require('autoprefixer')({browsers: '> 1% in US'}),
              //require('cssnano')()
            ]
          },
          dist: {
            src: 'css/*.css'
          }
        },
        prettify: {
            options: {
                indent: 4
            },
            all: {
                expand:true,
                cwd: './',
                ext: '.html',
                src: ['*.html'],
                dest: 'dist/'
            }
        },
        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'css', src: '**', dest: 'dist/css'},
                    {expand: true, cwd: 'js', src: '**', dest: 'dist/js'},
                    {expand: true, cwd: 'images', src: '**', dest: 'dist/images'},
                    {expand: true, cwd: 'lib', src: '**', dest: 'dist/lib'},
                ]
            },
            lib: {
                files: [
                    {expand: true, cwd: 'node_modules/bootstrap/dist', src: '**', dest: 'lib/bootstrap'},
                    {expand: true, cwd: 'node_modules/bootstrap-select/dist', src: '**', dest: 'lib/bootstrap-select'}
                ]
            },
        },
        exec: {
            zip_dist: {
                cmd: 'mv dist eco-mockups && zip -r -X eco-mockups-$(date "+%Y%m%d-%H%M%S").zip eco-mockups && mv eco-mockups dist'
            },
            clear_dist: {
                cmd: 'rm -rf dist/*'
            },
            compile_bs: {
                cwd: 'node_modules/bootstrap',
                cmd: 'grunt dist'
            }
        },
        watch: {
            css: {
                files: ['less/**/*.less'],
                tasks: ['less', 'postcss']
            },
            html: {
                files: [
                  'templates/**/*.html',
                  'templates/**/*.njk',
                  'templates/**/*.nunjucks',
                  'data.json'
                ],
                tasks: ['nunjucks']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/**/*.css',
                        'bootstrap/**/*.css',
                        '**/*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'eco.loc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-prettify');

    grunt.registerTask('css', ['less', 'postcss']);
    grunt.registerTask('build', ['nunjucks', 'copy:lib', 'less', 'postcss']);
    grunt.registerTask('lib', ['exec:compile_bs', 'copy:lib']);
    grunt.registerTask('dist', ['build', 'exec:clear_dist', 'prettify', 'copy:dist']);
    grunt.registerTask('package', ['build', 'exec:clear_dist', 'prettify', 'copy:dist', 'exec:zip_dist']);
    grunt.registerTask('default', ['browserSync', 'watch']);
}
