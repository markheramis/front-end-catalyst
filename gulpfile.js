var browserSync = require('browser-sync').create();
// Add tasks
require('./gulp/tasks/php').init();
require('./gulp/tasks/coffee').init(browserSync);
require('./gulp/tasks/sass').init(browserSync);
require('./gulp/tasks/browsersync').init(browserSync);
// Add watchers
require('./gulp/watcher/default');