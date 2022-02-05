'use strict';

const fs = require('hexo-fs')
const runner = require('hexo-util')
const chalk = require('chalk')


module.exports = function (args){
    const baseDir = this.base_dir;
    const firebaseCfg = 'firebase.json'
    const verbose = !args.silent;
    console.log("Checking Your Firebase Configuration……")
    try{
        fs.accessSync(baseDir+firebaseCfg,fs.R_OK)
    }catch(err){
        console.error(chalk.default.underline("firebase.json")+" NOT FOUND!")
        console.error("Go to "+chalk.default.underline("https://github.com/pai233/hexo-deployer-firebase")+" for helps.")
        return 404;
    }
    return runner.spawn("firebase",["deploy"],{
        cwd: baseDir,
        verbose: verbose
    })
}