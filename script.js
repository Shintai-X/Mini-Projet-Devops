const { exec } = require('child_process');


exec('git init');
exec('git pull https://github.com/Shintai-X/Mini-Projet-Devops.git main', (error, stdout, stderr) => {
  if (error) {
    console.error(`Git pull error: ${error}`);
    return;
  }

  console.log(`Git pull stdout: ${stdout}`);
  console.log(`Git pull stderr: ${stderr}`);
  exec('node /app/Mini-Projet-Devops/index.js');
  
});

