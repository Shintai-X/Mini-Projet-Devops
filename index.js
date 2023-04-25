console.log("Hello Man! Happy to see you in this docker image");
console.log("this line was added in the  test branch");
console.log("this line was added in the test branche 4");
console.log("SUIIIsssssss");

const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          console.log(filePath + '/');
          listFiles(filePath);
        } else {
          console.log(filePath);
        }
      });
    });
  });
}
