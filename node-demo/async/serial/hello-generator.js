function* func(){
    console.log('one')
    yield {a:1};
    console.log('two')
    yield '2';
    console.log('three')
    yield '3';
    console.log('four')
    yield '4';  
}

const f = func();

for(const k of f){
    console.log(k)
}