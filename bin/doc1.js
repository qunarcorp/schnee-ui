var exec = require('child_process').exec;

function myExec(param) {
    return new Promise(function(resolve, reject) {
        exec(param, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


myExec('ydoc build')
    .then(() => myExec('git checkout ydocTest'))
    .then(() => myExec('ls | grep -vE "_site|node_modules|dist|src|build|sign" | xargs rm -rd'))
    .then(() => myExec('mv _site/* .'))
    .then(() => myExec('rm -rd _site'))
    .then(() => myExec('git add .'))
    .then(() => myExec('git commit -m "Update page"'))
    .then(() => myExec('git push'))
    .catch(err => err);


// 执行  node bin/doc1.js
