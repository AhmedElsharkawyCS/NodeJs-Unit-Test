"use strict";

module.exports = function (grunt) {
  grunt.loadNPMTasks("grunt-mocha-test");
  grunt.loadNPMTasks("grunt-contrib-watch");
  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
        },
        src: ["test/*.test.js"],
      },
    },
  });
};
