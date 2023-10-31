const simpleGit = require('simple-git');


simpleGit()
   .init()
   .add('./*')
   .commit(`${new Date()} + BACKUP`)
   .push()
