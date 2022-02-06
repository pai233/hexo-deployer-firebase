'use strict';

const fs = require('hexo-fs')
const runner = require('hexo-util')
const chalk = require('chalk').default


module.exports = function (args){
    
    const baseDir = this.base_dir;
    const firebaseCfg = '/firebase.json'
    const verbose = !args.silent;
    console.log("Checking Your Firebase Configuration......")
    return fs.exists(baseDir+firebaseCfg).then(exist=>{
        if(!exist){
            console.error("You haven't initialized your project yet!")
            console.error("You can go to "+chalk.underline("https://github.com/pai233/hexo-deployer-firebase")+" for more helps")
            throw new ReferenceError("firebase.json Not Found")
        }
        return;
    }).then(()=>{
        console.log('Deploying......')
        return runner.spawn('firebase',['deploy'],{
            cwd: baseDir,
            verbose: verbose
        })
    })
}