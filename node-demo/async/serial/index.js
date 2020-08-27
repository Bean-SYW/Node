const logTime = (name) => {
    console.log(`Log...${name}--${new Date().toLocaleString()}`)
}

exports.callback = () => {
    setTimeout(()=>{
        logTime('callback 1')
        setTimeout(()=>{
            logTime('callback 2')
        },100)
    },100)
}

const promise = (name,delay) => new Promise(resolve => {
    setTimeout(()=>{
        logTime(name)
        resolve()
    },delay)
})

exports.promise = () => {
    promise('Promise 1').then(promise('Promise 2'))
}

exports.generator = () => {
    const gen = function* (name){
        yield promise(name+1)
        yield promise(name+2)
        yield promise(name+3)
        yield promise(name+4)
    }

    let co = gen => {
        if(it = gen.next().value){
            it.then(res => {
                co(gen)
            })
        }else{
            return
        }
    }
    co(gen('Co-gen'))
}

exports.asyncAwait = async () => {
    await promise('async await 1')
    await promise('async await 2')
    await promise('async await 3')
    await promise('async await 4')
}

exports.event = async () => {
    const asyncFun = name => event => {
        setTimeout(()=>{
            logTime(name)
            event.emit('end')
        },100)
        return event
    }

    const arr = [
        asyncFun('event 1'),
        asyncFun('event 2'),
        asyncFun('event 3'),
        asyncFun('event 4')
    ]

    const {EventEmitter} = require('events');
    const event = new EventEmitter();
    let i = 0;
    event.on('end',()=> i<arr.length&&arr[i++](event))
    event.emit('end');
}