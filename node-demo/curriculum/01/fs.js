const fs = require('fs');
const {promisify} = require('util');
const readFile = promisify(fs.readFile)

//同步方法
// const data = fs.readFileSync('./con.js');
// console.log('data',data);

// fs.readFile('./con.js',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// });

process.nextTick(async () => {
    const data = await readFile('./con.js');
    console.log('data',data.toString())
})