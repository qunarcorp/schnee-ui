/*
*执行脚本，将master分支的修改，自动执行dev分支上
*/

var fs = require('fs');
var path = require('path');
var child_process = require('child_process');
var { componentsArr } = require(path.resolve(__dirname, '../source/componentInfo.js'));


function myExec(param){
    return new Promise(function(resolve, reject){
        try {
            child_process.execSync(param);
            resolve();
        } catch (err){
            reject(err);
        }
    });
}
myExec(`rm -rf  ${path.resolve(__dirname, '../_sourceDev')}`) // 删除文件夹_sourceDev
    .then(() => myExec(`mkdir ${path.resolve(__dirname, '../_sourceDev')}`))    // 创建文件夹_sourceDev
    .then(() => myExec(`touch ${path.resolve(__dirname, '../_sourceDev/index.js')}`))    // 创建文件index
    .then(function(){
        // 将新加的组件(写在componentInfo里)，写到index.js中
        let importCompontent = '';
        let exportArr = [];
        componentsArr.map(function(item){
            importCompontent += 'import ' + item + ' from' + " '" + './components/' + item + "'" + '\n';
            exportArr.push('\n'+item);  
        });
        const exportDefault = 'export default {'+ exportArr + '};';
        const writeContent = importCompontent+ '\n' +exportDefault;  // 要写入文件的内容
        
        let fileId = path.resolve(__dirname, '../_sourceDev/index.js');
        fs.writeFileSync(
            fileId,
            writeContent
        );
    })
    .then(function(){
        // 复制文件夹,将source中的三个文件，复制到此文件夹中_sourceDev
        function copyDir(src, dist) {
            try {
                myExec(`cp -r ${src} ${dist}`);
            } catch (error) {
                console.log('错误信息为:\n', error);
            }	
        }
        copyDir(path.resolve(__dirname, '../source/assets'), path.resolve(__dirname, '../_sourceDev/'));
        copyDir(path.resolve(__dirname, '../source/common'), path.resolve(__dirname, '../_sourceDev/'));
        copyDir(path.resolve(__dirname, '../source/components'), path.resolve(__dirname, '../_sourceDev/'));
    })
    .then(() =>myExec(`git checkout dev`))
    
    .then(() => {
        let cwd = process.cwd();
        let source = path.join(cwd, '_sourceDev', '*');
        let cmd = `cp -r ${source} ${cwd}`;
        return myExec(cmd);
    })
    .then(() => myExec(`rm -rf _sourceDev`))
    .then(() => myExec(`git add .`))
    .then(() => myExec(`git commit -m 'fix: 发布'`))
    .then(function(){
        console.log('commit suc');
    })
    .catch(err => err);


// 执行命令的脚本 node bin/dev.js

