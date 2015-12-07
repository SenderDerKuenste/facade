module.exports = function(grunt) {
    grunt.initConfig({

    	// some configuraion value
    	assetspath: './public/assets',

        less: {
            build: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "<%= assetspath %>/css/senderderkuenste.css": "./src/less/style.less"
                }
            }
        },

        cssmin: {
            compress: {
                options: {
                    report: 'min',
                    keepSpecialComments: 0
                },
                files: {
                    '<%= assetspath %>/css/style.min.css': [
                        '<%= assetspath %>/css/senderderkuenste.css',
                        './vendor/animate.css/animate.css',
                    ]
                }
            }
        },

        concat: {
            all: {
                files: {
                    '<%= assetspath %>/js/app.js': [
                        
                        './src/js/*.js'
                    ],
                }
            }
        },

        uglify: {
        	all: {
        		files: {
                  	'<%= assetspath %>/js/app.min.js': '<%= assetspath %>/js/app.js'
                }
        	}
        },

        copy: {
            fonts: {
                dest: '<%= assetspath %>/fonts/',
                src: './node_modules/bootstrap/fonts/*',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
        },

        watch: {
            files: "./less/*",
            tasks: ["less"]
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'cssmin', 'concat', 'uglify', 'copy']);
};