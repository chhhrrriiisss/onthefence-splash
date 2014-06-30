'use strict';

module.exports = function(grunt) {

    // load tasks
    [
        'grunt-processhtml',
        'grunt-contrib-clean',
        'grunt-lesslint',        
        'grunt-contrib-uglify',
        'grunt-contrib-less',
        'grunt-contrib-copy',
        'grunt-contrib-concat',
        'grunt-contrib-watch'  
    ].forEach(function(task) { grunt.loadNpmTasks(task); });


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        processhtml: {
            options: {
                data: {
                    title: '<%= pkg.meta.title %>',
                    description: '<%= pkg.meta.description %>',
                    name: '<%= pkg.meta.name %>',
                    author: '<%= pkg.meta.name %>',
                    keywords: '<%= pkg.meta.keywords %>',
                    thumbnail: {
                        src: '<%= pkg.meta.thumbnail %>',
                        width: '300',
                        height: '300'
                    },
                    analytics: '<%= pkg.meta.analytics %>',
                    date: grunt.template.today('yyyy-mm-dd@hh:mm:ss TMZ'),
                    url: '<%= pkg.homepage %>'
                }
            },
            dev: {
                files: {
                    '<%= pkg.sourceFolder %>/index.html': ['<%= pkg.sourceFolder %>/index.md']
                }
            }
        },


        clean: {
            build: ["<%= pkg.distFolder %>/"],
        },

        uglify: {
            dev: {  
                files: {
                    '<%= pkg.sourceFolder %>/js/main.js': ['<%= pkg.sourceFolder %>/js/src/main.js'],
                    '<%= pkg.sourceFolder %>/js/plugins.js': ['<%= pkg.sourceFolder %>/js/src/plugins.js']
                }
            },

            dist: {
                files: {
                    '<%= pkg.distFolder %>/js/main.js': ['<%= pkg.sourceFolder %>/js/src/main.js'],
                    '<%= pkg.distFolder %>/js/plugins.js': ['<%= pkg.sourceFolder %>/js/src/plugins.js']
                }
            }
        },

        concat: {


        },

      
        less: {

            dev: {  
                files: {
                    '<%= pkg.sourceFolder %>/css/screen.css': '<%= pkg.sourceFolder %>/css/frag/screen.less',
                    '<%= pkg.sourceFolder %>/css/screen-mobile.css': '<%= pkg.sourceFolder %>/css/frag/screen-mobile.less',
                    '<%= pkg.sourceFolder %>/css/screen-narrow.css': '<%= pkg.sourceFolder %>/css/frag/screen-narrow.less',
                    '<%= pkg.sourceFolder %>/css/screen-narrower.css': '<%= pkg.sourceFolder %>/css/frag/screen-narrower.less',
                    '<%= pkg.sourceFolder %>/css/screen-wide.css': '<%= pkg.sourceFolder %>/css/frag/screen-wide.less',               
                    '<%= pkg.sourceFolder %>/css/screen-wider.css': '<%= pkg.sourceFolder %>/css/frag/screen-wider.less'
                }
            },

            dist: {
                options: {
                    cleancss: true,
                    compress: true
                },
                files: {
                    '<%= pkg.distFolder %>/css/screen.css': '<%= pkg.sourceFolder %>/css/frag/screen.less',
                    '<%= pkg.distFolder %>/css/screen-mobile.css': '<%= pkg.sourceFolder %>/css/frag/screen-mobile.less',
                    '<%= pkg.distFolder %>/css/screen-narrow.css': '<%= pkg.sourceFolder %>/css/frag/screen-narrow.less',
                    '<%= pkg.distFolder %>/css/screen-wide.css': '<%= pkg.sourceFolder %>/css/frag/screen-wide.less'
                }
            }
    
        },

        grunticon: {
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.sourceFolder %>/img/svg',
                    src: ['*.svg', '*.png'],
                    dest: "<%= pkg.sourceFolder %>/img"
                }],
                options: {
                    prefix: ".image-",
                    pngcrush: false // < here
                }
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= pkg.sourceFolder %>/img/svg/min',
                    src: ['*.svg'],
                    dest: "<%= pkg.sourceFolder %>/img"
                }],
                options: {
                    prefix: ".image-",
                    pngcrush: false // < here
                }
            }
        },

        copy: {

            dist: {

                files: [
                  // css
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['css/**.css'], dest: '<%= pkg.distFolder %>/css', filter: 'isFile', flatten: true},

                  // images 
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['img/*'], dest: '<%= pkg.distFolder %>/img', filter: 'isFile', flatten: true},

                  // vendor js 
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['js/vendor/**.js'], dest: '<%= pkg.distFolder %>/js/vendor', flatten: true},

                  // stock html
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['*.*'], dest: '<%= pkg.distFolder %>/', filter: 'isFile'}

                ]
            }

        },

        watch: {

            scripts: {
                files: ['<%= pkg.sourceFolder %>/js/**'],
                tasks: ['defaultJS'],
                options: {
                    debounceDelay: 1000
                },
            },

            html: {
                files: ['<%= pkg.sourceFolder %>/*.html', '<%= pkg.sourceFolder %>/*.md', 'package.json'],
                tasks: ['default'],
                options: {
                    debounceDelay: 1000
                },
            },

            css: {
                files: ['<%= pkg.sourceFolder %>/css/frag/**'],
                tasks: ['defaultCSS'],
                options: {
                    livereload: true
                },      
            }

        }
    

    });

    grunt.registerTask('default', ['processhtml:dev', 'less:dev', 'uglify:dev']);
    grunt.registerTask('defaultCSS', ['less:dev']);
    grunt.registerTask('defaultJS', ['uglify:dev']);
    grunt.registerTask('defaultSVG', ['grunticon:dev']);
    grunt.registerTask('dist', ['clean', 'less:dist', 'uglify:dist', 'copy:dist']);
   
};


