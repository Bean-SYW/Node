
function updateTime(){
    return new Date().toUTCString();
}

const http = require('http');
http.createServer((req,res)=>{
    const {url} = req;
    if(url === '/'){
        res.end(`
            <html>
                Html Update Time ${updateTime()}
                <script src='main.js'></script>
            </html>
        `)
    }else if(url === '/main.js'){
        const content = `document.writeln('<br />JS Uptate Time : ${updateTime()}')`;
        res.setHeader('Expires',new Date(Date.now()+10*1000).toUTCString());
        res.setHeader('Cache-Control','max-age=20')
        res.statusCode = 200;
        res.end(content)
    }else if(url === '/favicon.ico'){
        res.end('');
    }

}).listen(3000,()=>{
    console.log('Http Cache Test Run At '+3000)
});

