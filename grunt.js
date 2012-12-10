// add npm bump feature that vojt wrote
// https://github.com/gruntjs/grunt/pull/319/files
// bump will build into 'dist/latest/' and 'dist/vX.Y.Z/'



// these tasks defaults to 'dist/revision/' folder
// if specificed will build to 'dist/latest/' and '/dist/vX.Y.Z/'
// add grunt-less(concat to master.css) task
// add grunt-css task
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


module.exports = function (grunt) {

  // Project configation
  grunt.initConfig({

  });
    
  // Load tasks from "grunt-sample" grunt plugin install via nmp.
  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', 'lint csslint');

};