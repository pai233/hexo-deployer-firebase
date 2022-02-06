'use strict';

const fs = require('hexo-fs')
const runner = require('hexo-util')
const chalk = require('chalk')


module.exports = function (args){
    
    const baseDir = this.base_dir;
    const firebaseCfg = baseDir+'/firebase.json'
    const firebaserc = baseDir+'/.firebaserc'
    const verbose = !args.silent;
    const id = args.id;
    const deployArgs = ['deploy']
    const fileError = new Error("Write File Failed")
    const info = chalk.bgGreen("INFO")
    const err = chalk.bgRed("ERROR")
    const help = chalk.bgBlue("HELP")
    console.log(info+"  Initialize Firebase Project")
    return fs.writeFile(firebaseCfg,`
        {
            "hosting": {
                "public": "public",
                "ignore": [
                "firebase.json",
                "**/.*",
                "**/node_modules/**"
                ]
            }
        }      
    `,(error)=>{
        if(error){
            console.error(err+" Write firebase.json Failed!")
            console.error(help+"  You can go to "+chalk.underline("https://github.com/pai233/hexo-deployer-firebase")+" for more helps.")
            throw fileError
        }
        console.log(info+"  firebase.json Created")
        return
    }).then(()=>{
        return fs.writeFile(firebaserc,`
          {
            "projects": {
              "default": "${id}"
            }
          }
        `,(error)=>{
            if(error){
                console.error(err+" Write .firebaserc Failed!")
                console.error(help+"  You can go to "+chalk.underline("https://github.com/pai233/hexo-deployer-firebase")+" for more helps")
                throw fileError
            }
            console.log(info+"  .firebaserc Created")
            return
        }).then(()=>{
            console.log(info+'  Start Deploying')
            return runner.spawn('firebase',deployArgs,{
                cwd: baseDir,
                verbose: verbose
            })
        })
    })
}