module.exports = function(grunt){

  // Configure main project settings
  grunt.initConfig({

      // Basic settings and info about our plugins
      pkg: grunt.file.readJSON('package.json'),

      sass: {
           dist: {
               options: {
                   style: 'compressed'
               },
               files: {
                   'css/style.css': 'sass/main.scss'
               }
           }
       },

       cssmin: {
         my_target: {
           files: [{
             expand: true,
             cwd: 'css/',
             src: ['style.css'],
             dest: 'css/',
             ext: '.min.css'
           }]
         }
     },

       watch: {
           sass:  { files: 'sass/main.scss', tasks: [ 'sass' ] },
           css:  { files: 'css/*.css', tasks: [ 'cssmin' ] },
       }

  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Execute task
  grunt.registerTask('default', ['watch', 'sass', 'cssmin']);

};
