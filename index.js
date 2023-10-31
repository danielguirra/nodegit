const simpleGit = require('simple-git');

const fs = require('fs')


const options = {
   baseDir: process.cwd(),
   binary: 'git',
   maxConcurrentProcesses: 6,
   trimmed: false,
};

// when setting all options in a single object
const git = simpleGit(options);



simpleGit()
   .init()
   .add('./*')
   .commit('first commit!')
   .addRemote('origin', 'https://github.com/danielguirra/testea.git')
   .push('origin', 'master');