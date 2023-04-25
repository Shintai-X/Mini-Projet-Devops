const { exec } = require('child_process');

// Replace these with the URL and branch of the repository you want to pull
const repoUrl = 'https://github.com/Shintai-X/Mini-Projet-Devops.git';
const branch = 'main';

// Initialize the repository
exec('git init', (error, stdout, stderr) => {
  if (error) {
    console.error(`Git init error: ${error}`);
    return;
  }

 

  // Pull the repository
  exec(`git pull ${repoUrl} ${branch}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Git pull error: ${error}`);
      return;
    }


    console.log(`Git pull stderr: ${stderr}`);

    // Run the index.js file
    exec('node index.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Node error: ${error}`);
        return;
      }

      console.log(`Node stdout: ${stdout}`);
      
    });
  });
});