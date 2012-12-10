// add npm bump feature that vojt wrote
// https://github.com/gruntjs/grunt/pull/319/files
// bump will build into 'dist/latest/' and 'dist/vX.Y.Z/'

// these tasks defaults to 'dist/revision/' folder
// if specificed will build to 'dist/latest/' and '/dist/vX.Y.Z/'
// *** add grunt-less(concat to master.css) task
// add grunt-less-concat task
// add grunt-lint task
// add grunt-css-min task
// add grunt-js-concat task
// add grunt-js-lint task
// add grunt-js-concat task
// add grunt-js-min task
// add grunt-git-tag-and-push task
// add grunt-push-to-cdn task
// add grunt-bump task
// add grunt-release, executes theses tasks in sequence
// * grunt-css task
// * grunt-lint task
// * grunt-css-min task
// * grunt-js-concat
// * grunt-js-lint
// * grunt-js-concat
// * grunt-js-min
// * grunt-git-tag-and-push
// * grunt-push-to-cdn

module.exports = function(grunt) {

  // Project configation
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '// smacss-less-boilerplate, <%= pkg.version %>\n' + '// Copyright (c)<%= grunt.template.today("yyyy") %> Stephan Wallentin, Poop Loop\n' + '// http://github.com/swallentin'
    },
    // LESS mastering and minifying
    less: {
      concat: {
        options: {
          banner: "testing"
        },
        files: {
          "dist/revision/css/themes/default/master.css": "assets/less/themes/default/master.less"
        }
      },
      min: {
        options: {
          yuicompress: true
        },
        files: {
          "dist/revision/css/themes/default/master.min.css": "assets/less/themes/default/master.less"
        }
      }
    },

    // Copy files from revision to 'latest' and 'vX.Y.Z'
    // Used for creating releases
    copy: {
      release: {
        files: {
         "dist/v<%=pkg.version%>/css/themes/default/": "dist/revision/css/themes/default/*.css",
         "dist/latest/css/themes/default/": "dist/revision/css/themes/default/*.css"
        }
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', 'less:concat less:min');
  grunt.registerTask('release', 'less:concat less:min copy:release');

};