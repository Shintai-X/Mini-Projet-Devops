const { exec } = require('child_process');

const gitInitPromise = new Promise((resolve, reject) => {
  exec('git init', (error, stdout, stderr) => {
    if (error) {
      reject(`Git init error: ${error}`);
    } else {
      resolve(stdout);
    }
  });
});

const gitPullPromise = new Promise((resolve, reject) => {
  exec('git pull https://github.com/Shintai-X/Mini-Projet-Devops.git main', (error, stdout, stderr) => {
    if (error) {
      reject(`Git pull error: ${error}`);
    } else {
      resolve(stdout);
    }
  });
});

Promise.all([gitInitPromise, gitPullPromise]).then(([gitInitOutput, gitPullOutput]) => {
  console.log(`Git init stdout: ${gitInitOutput}`);
  console.log(`Git pull stdout: ${gitPullOutput}`);
}).catch((error) => {
  console.error(error);
});

