#!/usr/bin/env node
(function() {
  var recursive = require('recursive-readdir');
  var path = require('path');
  require('shelljs/global');
  var base = process.cwd();
  function ignoreFunc(file, stats) {
    return file.includes('node_modules');
  }
  recursive(base, [ ignoreFunc ], function(err, files) {
    // Files is an array of filename
    var files = files.filter(x => x.endsWith('.js'));
    console.log(files);
    files.forEach(file => {
      exec(`prettier --write --single-quote  ${file}`);
    });
  });
})();
