var exec = require('child_process').exec;

// ydoc build
exec('ydoc build', function(err, stdout, stderr) {
    if (err) {
        console.log('************ydoc build失败,失败信息如下************\n');
        throw err;
    } else {
        console.log('ydoc build成功, 信息如下\n', stdout);
        gitCheckout();
    }
});


// 切换分支
function gitCheckout(){
    exec('git checkout ydocTest', function(err, stdout, stderr) { 
        if (err) {
            console.log('************gh-pages分支切换失败,切换信息如下************\n');
            throw err;
        } else {
            console.log('*************gh-pages分支切换成功\n', stdout);
            deleteFile();
        }
    });
}



// // 删除多余的文件, 只保留_site|node_modules|dist|src|build|sign这些文件
// function deleteFile() {
//     exec("ls | grep -vE '_site|node_modules|dist|src|build|sign' | xargs rm -rd", function(err, stdout, stderr) { 
//         if (err) {
//             console.log('************删除多余文件失败************\n');
//             throw err;
//         } else {
//             console.log('************删除多余文件成功', stdout);
//             mvSite();
//         }
//     });
// }

// // 移动_site文件到根目录
// function mvSite() {
//     exec("mv _site/* .", function(err, stdout, stderr) { 
//         if (err) {
//             console.log('************_site文件内容移动失败************\n');
//             throw err;
//         } else {
//             console.log('************_site文件内容移动成功', stdout);
//             deleteFileSite();
//         }
//     });
// }

// // 删除文件夹_site
// function deleteFileSite() {
//     exec("rm -rd _site", function(err, stdout, stderr) { 
//         if (err) {
//             console.log('************删除_site文件失败************\n');
//             throw err;
//         } else {
//             console.log('************删除_site文件成功', stdout);
//             git();
//         }
//     });
// }

// // 提交到git仓库
// function git() {
//     exec("git add . && git commit -m 'Update page' && git push ", function(err, stdout, stderr) { 
//         if (err) {
//             console.log('************push远程仓库失败************\n');
//             throw err;
//         } else {
//             console.log('************push远程仓库成功');
//         }
//     });
// }



// 执行  node bin/doc.js
