const {promisify} = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const {clone} = require('./download')

module.exports = async name => {
    clear()
    const data = await figlet(name + ' Welcome')
    log(data)

    //克隆项目
    await clone('github:su37josephxia/vue-template',name);

    //安装依赖
    await spawn('cnpm',['install'],{cwd:`./${name}`})
    log(`
OK
=========
安装完成
=========
    `)

    //打开浏览器
    open('http://localhost:8080')
    await spawn('npm',['run','serve'],{cwd:`./${name}`})
}

function spawn(...args){
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close',()=>{
            resolve()
        })
    })
}