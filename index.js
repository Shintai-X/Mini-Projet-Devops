console.log("Hello Man! Happy to see you in this docker image");
console.log("this line was added in the  test branch");
console.log("this line was added in the test branche 4");
console.log("SUIIIsssssss");

const fs = require('fs');

// Get the current directory
const directoryPath = './';

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Print the names of all files and folders
  console.log('Files in directory:');
  files.forEach(file => {
    console.log(file);
  });
});