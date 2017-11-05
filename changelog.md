NOTE: I should finally have this in order, so I'm starting this commit with v.1.0 as a milestone for this project.
# v.1.0 - Initial Release
- gulp segregated by task found at gulp/tasks directory
- gulp compile for coffee and sass is not based on fixed configuration anymore but based on file within its respective src directory.
- watcher are now segregated found at gulp/watcher (just in case if you want to make your own custom watcher.
- filesystem helper added.
- PHP gulp task not tested yet, for some reason I forgot to install php-cgi and I don't have internet as of the time of writing.