// add npm bump feature that vojt wrote
// https://github.com/gruntjs/grunt/pull/319/files
// bump will build into 'dist/latest/' and 'dist/vX.Y.Z/'

// these tasks defaults to 'dist/revision/' folder
// if specificed will build to 'dist/latest/' and '/dist/vX.Y.Z/'
// add grunt-js-combine task
// add grunt-js-hint task
// add grunt-js-min task
// *** add grunt-git-tag-and-push task - use npm version instead or vojts solution
// add grunt-push-to-cdn task
// add grunt-bump task
// add grunt-dist, executes theses tasks in sequence
// * grunt-git-tag-and-push
// * grunt-push-to-cdn

module.exports = function(grunt) {

  // Project configation
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '// smacss-less-boilerplate, <%= pkg.version %>\n' + '// Copyright (c)<%= grunt.template.today("yyyy") %> Stephan Wallentin, Fantasmick \n' + '// http://github.com/swallentin'
    },
    // RECESS lint, combine and minify
    recess: {
      lint: {
        src: ['assets/less/themes/default/master.less']
      },
      combine: {
        src: ['assets/less/themes/default/master.less'],
        dest: 'dist/revision/css/themes/default/master.css',
        options: {
          compile: true
        }
      },
      min: {
        src: ['assets/less/themes/default/master.less'],
        dest: 'dist/revision/css/themes/default/master.min.css',
        options: {
          compile: true,
          compress: true
        }
      }
    },
    // Copy files from revision to 'latest' and 'vX.Y.Z'
    // Used for preparing distribution packages
    copy: {
      dist: {
        files: {
         'dist/latest/css/themes/default/': 'dist/revision/css/themes/default/*.css',
         'dist/v<%=pkg.version%>/css/themes/default/': 'dist/revision/css/themes/default/*.css',
         'dist/v<%=pkg.version%>/js/': 'dist/revision/js/*.js'
        }
      }
    },
    // Concat JS
   concat: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'assets/js/jquery.plugins/**/*.js',
          'assets/js/views/**/*.js',
          'assets/js/app.js'
        ],
        dest: 'dist/revision/js/app.js'
      }
    },

    // rig is used for creating JS AMD modules
    rig: {
      amd: {
        src: ['<banner:meta.banner>', 'assets/js/amd.js'],
        dest: 'dist/revision/js/app.amd.js'
      }
    },
    // min id used to minify JS
    min: {
      standard: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/revision/js/app.min.js'
      },
      amd: {
        src: ['<banner:meta.banner>', '<config:rig.amd.dest>'],
        dest: 'dist/revision/js/app.amd.min.js'
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-rigger');

  // Register tasks
  
  // Combines all files, mainly used for development
  grunt.registerTask('default', 'recess:combine concat rig');
  // Create a revision of LESS and JS using lint, combine, concat, rig and minification
  grunt.registerTask('revision', 'recess:lint recess:combine recess:min concat rig min');
  // Create a distribution build and put it in 'dist/latest' and 'dist/vX.Y.Z'
  grunt.registerTask('dist', 'revision copy:dist');
};