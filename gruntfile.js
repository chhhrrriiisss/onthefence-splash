'use strict';

module.exports = function(grunt) {

    // load tasks
    [
        'grunt-processhtml',
        'grunt-svgmin',
        'grunt-grunticon',
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
            },
            dist: {
                files: {
                    '<%= pkg.distFolder %>/index.html': ['<%= pkg.sourceFolder %>/index.md']
                }
            }
        },


        clean: {

            svgdev: ["<%= pkg.sourceFolder %>/img/grunticon.loader.js", "<%= pkg.sourceFolder %>/img/preview.html"],
            svgdist: ["<%= pkg.distFolder %>/img/grunticon.loader.js", "<%= pkg.distFolder %>/img/preview.html"],
            dist: ["<%= pkg.distFolder %>"]
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
                    '<%= pkg.distFolder %>/js/script.min.js': ['<%= pkg.sourceFolder %>/js/script.js']
                }
            }
        },

        concat: {
      
            dist: {
                    src: ['<%= pkg.sourceFolder %>/js/src/plugins.js', '<%= pkg.sourceFolder %>/js/src/main.js'],
                    dest: '<%= pkg.sourceFolder %>/js/script.js'
            },
        },

      
        less: {

            dev: {  
                files: {
                    '<%= pkg.sourceFolder %>/css/screen.css': '<%= pkg.sourceFolder %>/css/frag/screen.less',
                    '<%= pkg.sourceFolder %>/css/screen-mobile.css': '<%= pkg.sourceFolder %>/css/frag/screen-mobile.less',
                    '<%= pkg.sourceFolder %>/css/screen-narrow.css': '<%= pkg.sourceFolder %>/css/frag/screen-narrow.less',
                    '<%= pkg.sourceFolder %>/css/screen-small.css': '<%= pkg.sourceFolder %>/css/frag/screen-small.less',
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
                    '<%= pkg.distFolder %>/css/screen-small.css': '<%= pkg.sourceFolder %>/css/frag/screen-small.less',
                    '<%= pkg.distFolder %>/css/screen-wide.css': '<%= pkg.sourceFolder %>/css/frag/screen-wide.less',               
                    '<%= pkg.distFolder %>/css/screen-wider.css': '<%= pkg.sourceFolder %>/css/frag/screen-wider.less'
                }
            }
    
        },

        svgmin: {

            devMain: {       
                options: {
                     plugins: [
                        { cleanupAttrs: true },
                        { cleanupEnableBackground: true },
                        { cleanupIDs: true },
                        { cleanupNumericValues: true },
                        { collapseGroups: true },
                        { convertColors: true },
                        { convertPathData: true },
                        { convertShapeToPath: true },
                        { convertStyleToAttrs: true },
                        { convertTransform: true },
                        { mergePaths: true },
                        { moveElemsAttrsToGroup: true },
                        { moveGroupAttrsToElems: true },
                        { removeComments: true },
                        { removeDoctype: true },
                        { removeEditorsNSData: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyContainers: true },
                        { removeEmptyText: true },
                        { removeHiddenElems: true },
                        { removeMetadata: true },
                        { removeNonInheritableGroupAttrs: true },
                        { removeRasterImages: false }, //Keep raster images with the svg
                        { removeTitle: true },
                        { removeUnknownsAndDefaults: true },
                        { removeUnusedNS: true },
                        { removeUselessStrokeAndFill: false }, //Enabling this may case small details to be removed
                        { removeViewBox: false }, //I keep the view box because that's where illustrator hides the SVG dimensions
                        { removeXMLProcInst: false }, //Enabling this breaks grunticon because it removes the XML header
                        { sortAttrs: true },
                        { transformsWithOnePath: false } //Enabling this breaks Illustrator SVGs with complex text?
                    ]
                },                              // Target
                files: [{               // Dictionary of files
                    expand: true,       // Enable dynamic expansion.
                    cwd: '<%= pkg.sourceFolder %>/img/svgsrc',     // Src matches are relative to this path.
                    src: ['*.svg'],  // Actual pattern(s) to match.
                    dest: '<%= pkg.sourceFolder %>/img/svgmin',    // Destination path prefix.
                    ext: '.svg'
                    // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
                }]
            },
            devMobile: {       
                options: {
                     plugins: [
                        { cleanupAttrs: true },
                        { cleanupEnableBackground: true },
                        { cleanupIDs: true },
                        { cleanupNumericValues: true },
                        { collapseGroups: true },
                        { convertColors: true },
                        { convertPathData: true },
                        { convertShapeToPath: true },
                        { convertStyleToAttrs: true },
                        { convertTransform: true },
                        { mergePaths: true },
                        { moveElemsAttrsToGroup: true },
                        { moveGroupAttrsToElems: true },
                        { removeComments: true },
                        { removeDoctype: true },
                        { removeEditorsNSData: true },
                        { removeEmptyAttrs: true },
                        { removeEmptyContainers: true },
                        { removeEmptyText: true },
                        { removeHiddenElems: true },
                        { removeMetadata: true },
                        { removeNonInheritableGroupAttrs: true },
                        { removeRasterImages: false }, //Keep raster images with the svg
                        { removeTitle: true },
                        { removeUnknownsAndDefaults: true },
                        { removeUnusedNS: true },
                        { removeUselessStrokeAndFill: false }, //Enabling this may case small details to be removed
                        { removeViewBox: false }, //I keep the view box because that's where illustrator hides the SVG dimensions
                        { removeXMLProcInst: false }, //Enabling this breaks grunticon because it removes the XML header
                        { sortAttrs: true },
                        { transformsWithOnePath: false } //Enabling this breaks Illustrator SVGs with complex text?
                    ]
                },                              // Target
                files: [{               // Dictionary of files
                    expand: true,       // Enable dynamic expansion.
                    cwd: '<%= pkg.sourceFolder %>/img/svgsrc/mobile',     // Src matches are relative to this path.
                    src: ['*.svg'],  // Actual pattern(s) to match.
                    dest: '<%= pkg.sourceFolder %>/img/svgmin/mobile',    // Destination path prefix.
                    ext: '.svg'
                    // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
                }]
            }

        },

        grunticon: {
            devMain: {
                files: [{  
                expand: true,         
                cwd: '<%= pkg.sourceFolder %>/img/svgmin',
                src: ['**/*.svg'],
                dest: "<%= pkg.sourceFolder %>/img"
                }],
                options: {
                    cssprefix: ".image-",
                    datasvgcss: "images.data.svg.css",
                    datapngcss: "images.data.png.css",
                    urlpngcss: "images.fallback.css"                    
                }                           
            },

            devMobile: {
                files: [{  
                expand: true,         
                cwd: '<%= pkg.sourceFolder %>/img/svgmin/mobile',
                src: ['**/*.svg'],
                dest: "<%= pkg.sourceFolder %>/img"
                }],
                options: {
                    cssprefix: ".image-",
                    datasvgcss: "images-min.data.svg.css",
                    datapngcss: "images-min.data.png.css",
                    urlpngcss: "images-min.fallback.css"                    
                }
            },

            dist: {
                files: [{  
                    expand: true,         
                    cwd: '<%= pkg.sourceFolder %>/img/svgmin',
                    src: ['**/*.svg'],
                    dest: "<%= pkg.distFolder %>/img"
                }],
                options: {
                    cssprefix: ".image-",
                    datasvgcss: "images.data.svg.css",
                    datapngcss: "images.data.png.css",
                    urlpngcss: "images.fallback.css"                    
                }
            }

            
        },

        copy: {

            dist: {

                files: [

                // css
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['app/**.*'], dest: '<%= pkg.distFolder %>/app'},

                  // css
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['css/**.css'], dest: '<%= pkg.distFolder %>/css', filter: 'isFile', flatten: true},

                  // images/png
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['css/fonts/*'], dest: '<%= pkg.distFolder %>/css/fonts', filter: 'isFile', flatten: true},

                  // images 
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['img/*'], dest: '<%= pkg.distFolder %>/img', filter: 'isFile', flatten: true},

                  // images/png
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['img/png/*'], dest: '<%= pkg.distFolder %>/img/png', filter: 'isFile', flatten: true},

                  // images/png
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['img/icons/*'], dest: '<%= pkg.distFolder %>/img/icons', filter: 'isFile', flatten: true},

                  // vendor js 
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['js/vendor/**.js'], dest: '<%= pkg.distFolder %>/js/vendor', flatten: true},

                  // stock html
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/', src: ['*.*', '!*.md'], dest: '<%= pkg.distFolder %>/', filter: 'isFile'},

                  // 2011
                  {expand: true, cwd: '<%= pkg.sourceFolder %>/2011', src: ['*.*'], dest: '<%= pkg.distFolder %>/2011'}

                ]
            }

        },

        watch: {

            svgs: {
                files: ['<%= pkg.sourceFolder %>/img/svgsrc/**/*.svg'],
                tasks: ['defaultSVG'],
                options: {
                    debounceDelay: 1000
                },
            },

            scripts: {
                files: ['<%= pkg.sourceFolder %>/js/**'],
                tasks: ['defaultJS'],
                options: {
                    debounceDelay: 1000
                },
            },

            html: {
                files: ['<%= pkg.sourceFolder %>/*.html', '<%= pkg.sourceFolder %>/*.md', 'package.json'],
                tasks: ['defaultHTML'],
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

    grunt.registerTask('default', ['defaultSVG', 'defaultHTML', 'defaultCSS', 'defaultJS']);
    grunt.registerTask('defaultHTML', ['processhtml:dev']);
    grunt.registerTask('defaultCSS', ['less:dev']);
    grunt.registerTask('defaultJS', ['uglify:dev']);
    grunt.registerTask('defaultSVG', ['svgmin:devMain', 'svgmin:devMobile', 'grunticon:devMain', 'grunticon:devMobile', 'clean:svgdev']);
    grunt.registerTask('dist', ['clean:dist', 'grunticon:dist', 'clean:svgdist', 'copy:dist', 'processhtml:dist', 'concat:dist', 'uglify:dist', 'less:dist']);
   
};


