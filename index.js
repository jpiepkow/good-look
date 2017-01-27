#!/usr/bin/env node
(function() {
  var recursive = require("recursive-readdir");
  require("shelljs/global");
  var base = process.cwd();
  recursive(base, function(err, files) {
    // Files is an array of filename
    var files = files.filter(x => x.endsWith(".js"));
    files.forEach(file => {
      exec(`prettier --write ${file}`);
    });
  });
})();
