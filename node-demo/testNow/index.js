const path = require('path');
const fs = require('fs');
module.exports = class TestNow {
    genJestSource(sourcePath = path.resolve('./')){
        const testPath = `${sourcePath}/__test__`;
        if(!fs.existsSync(testPath)){
            fs.mkdirSync(testPath);
        }
        let list = fs.readdirSync(sourcePath);
        list.map(v => `${sourcePath}/${v}`)
            .filter(v => fs.statSync(v).isfile)
            .filter(v => v.indexOf('.spec') === -1)
            .map(v => this.genTestFile(v))
    }

    genTestFile(filename){
        console.log('filename',filename)
        const testFileName = this.getTestFileName(filename)

        if(fs.existsSync(testFileName)){
            return
        }

        const mod = require(filename);
        let source
        if(typeof mod === 'object'){
            source = Object.keys(mod).map(v => this.getTestSource(v,path.basename(filename),true)).join('/n');
        }else if(typeof mod === 'function'){
            const basename = path.basename(filename);
            source = this.getTestSource(basename.replace('.js',''),basename);
        }
        fs.writeFileSync(testFileName,source)
    }

    getTestSource(methodName,classFile,isClass = false){
        return `
test('Test-${methodName}',()=>{
const ${isClass?'{'+methodName+'}':methodName} = require('../${classFile}');
const ret = ${methodName}()
//expect(ret).toBe('test fun')})
        `}

    /**
     * 生产测试文件名
     * @param {*} filename 代码文件名
     */
    getTestFileName(filename){
        const dirName = path.dirname(filename);
        const baseName = path.basename(filename);
        const extName = path.extname(filename);
        const testName = baseName.replace(extName,`.spec${extName}`)
        return path.format({
            root:dirName+'/__test__/',
            base:testName
        });
    }
}