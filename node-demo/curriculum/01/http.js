const http = require('http');
const fs = require('fs');

// http.createServer((req,res)=>{
//     console.log('res',getPrototypeChain(res))
//     res.end('hello node');
// }).listen(3000)

http.createServer((req,res)=>{
    const {url,method,headers} = req;
    if(url==='/' && method === 'GET'){
        fs.readFile('index.html',(err,data)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain;charset=utf-8'
                })
                res.end('500 服务器错误')
                return 
            }
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            res.end(data);
        });
    }else if(url === '/users' && method === 'GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify([{name:'tom'}]))
    }else if(headers.accept.indexOf('image/*' && method === 'GET')){
        fs.createReadStream('.'+url).pipe(res)
    }
}).listen(3000)

function getPrototypeChain(obj){
    const protoArr = [];
    while(obj = Object.getPrototypeOf(obj)){
        protoArr.push(obj);
    }
    return protoArr;
}