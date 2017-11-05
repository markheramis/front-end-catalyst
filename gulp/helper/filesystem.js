var fs = require('fs');
var path = require('path');

module.exports.getFilesOnDir = function (dir, extension) {
    var files = fs.readdirSync(dir).filter(function (file) {
        return fs.statSync(path.join(dir, file)).isFile();
    });
    if (extension !== undefined) {
        var validFiles = [];
        files.forEach(function (file) {
            var arr = file.split('.');
            if (arr[1] == extension) {
                validFiles.push(arr);
            }
        });
        return validFiles;
    } else {
        return files;
    }
}