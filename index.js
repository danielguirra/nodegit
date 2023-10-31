const simpleGit = require('simple-git');

const fs = require('fs')


const options = {
   baseDir: process.cwd(),
   binary: 'git',
   maxConcurrentProcesses: 6,
   trimmed: false,
};





simpleGit()
   .init()
   .add('./*')
   .commit('first commit!')
   .push()
