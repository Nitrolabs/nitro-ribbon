module.exports = function(grunt) {

    "use strict";

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-handlebars');

    var autoprefixer = require('autoprefixer-core');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * Nitrolabs Ribbon v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
                ' */\n',

        clean: {
            build: ['build/js', 'build/css', 'build/fonts'],
            compiled_html: ['.compiled_html']
        },

        handlebars: {
            compile: {
                options: {
                    namespace: 'Ribbon.Templates'
                },
                files: {
                    'build/temp/templates.js' : ['templates/ribbonHeader.html','templates/ribbonContent.html']
                }
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                footer: "",
                stripBanners: true,
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            },
            ribbon: {
                src: [
                    'js/vendor/*.js',
                    'js/lib/*.js',
                    'js/utils/*.js',
                    'js/widgets/*.js',
                    'js/templates/*.js',
                    'build/temp/templates.js'
                ],
                dest: 'build/js/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                stripBanners: false,
                sourceMap: false
            },
            metro: {
                src: '<%= concat.ribbon.dest %>',
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },

        less: {
            options: {
                paths: ['less'],
                strictMath: false
            },
            compileCore: {
                src: 'less/<%= pkg.name %>.less',
                dest: 'build/css/<%= pkg.name %>.css'
            },
            compileResponsive: {
                src: 'less/<%= pkg.name %>-responsive.less',
                dest: 'build/css/<%= pkg.name %>-responsive.css'
            },
            compileSchemes: {
                src: 'less/<%= pkg.name %>-schemes.less',
                dest: 'build/css/<%= pkg.name %>-schemes.css'
            },
            compileFont: {
                src: 'less/<%= pkg.name %>-icons.less',
                dest: 'build/css/<%= pkg.name %>-icons.css'
            }
        },

        postcss: {
            options: {
                processors: [
                    autoprefixer({ browsers: ['> 5%'] }).postcss
                ]
            },
            dist: { src: 'build/css/*.css' }
        },

        cssmin: {
            minCore: {
                src: 'build/css/<%= pkg.name %>.css',
                dest: 'build/css/<%= pkg.name %>.min.css'
            },
            minResponsive: {
                src: 'build/css/<%= pkg.name %>-responsive.css',
                dest: 'build/css/<%= pkg.name %>-responsive.min.css'
            },
            minSchemes: {
                src: 'build/css/<%= pkg.name %>-schemes.css',
                dest: 'build/css/<%= pkg.name %>-schemes.min.css'
            },
            minFont: {
                src: 'build/css/<%= pkg.name %>-icons.css',
                dest: 'build/css/<%= pkg.name %>-icons.min.css'
            }
        },

        copy: {
            build_font: {
                src: 'fonts/*',
                dest: 'build/',
                expand: true
            },
            docs_css_core: {
                src: 'build/css/<%= pkg.name %>.css',
                dest: 'docs/css/<%= pkg.name %>.css'
            },
            docs_css_responsive: {
                src: 'build/css/<%= pkg.name %>-responsive.css',
                dest: 'docs/css/<%= pkg.name %>-responsive.css'
            },
            docs_css_schemes: {
                src: 'build/css/<%= pkg.name %>-schemes.css',
                dest: 'docs/css/<%= pkg.name %>-schemes.css'
            },
            docs_css_font: {
                src: 'build/css/<%= pkg.name %>-icons.css',
                dest: 'docs/css/<%= pkg.name %>-icons.css'
            },
            docs_js: {
                src: 'build/js/<%= pkg.name %>.js',
                dest: 'docs/js/<%= pkg.name %>.js'
            }
        },

        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'adsense',
                            replacement: '<%= grunt.file.read(".replace/google-adsense-block.txt") %>'
                        },
                        {
                            match: 'hit',
                            replacement: '<%= grunt.file.read(".replace/hit-ua-counter.txt") %>'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['docs/*.html'], dest: '.compiled_html/'
                    }
                ]
            }
        },

        watch: {
            scripts: {
                files: ['templates/*.html','less/*.less','js/lib/*.js', 'js/utils/*.js', 'js/widgets/*js'],
                tasks: ['handlebars', 'concat', 'uglify', 'copy:docs_js']
            }
        }
    });

    grunt.registerTask('default', [
        'clean', 'handlebars', 'concat', 'uglify', 'less', 'postcss', 'cssmin', 'copy', 'replace', 'watch'
    ]);

};