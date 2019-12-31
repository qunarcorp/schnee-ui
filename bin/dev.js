/*
 *执行脚本，将master分支的修改，自动执行dev分支上
 */

const fs = require('fs');
const path = require('path');
const moment = require('moment');
const chalk = require('chalk');
const { execSync } = require('child_process');
const { componentsArr, h5Component } = require('../source/componentInfo.js');

const CONFIG = {
    projectDir: path.resolve(__dirname, '..'),
    /**
     * distDir: 和 source 目录同级创建临时目录
     */
    distDir: path.resolve(__dirname, '..', '_sourceDev'),
    branch: 'dev',
    /**
     * copyDir: 需要复制的目录
     */
    copyDir: ['assets', 'common', 'components', 'h5']
};

const now = moment().format('YYYY-MM-DD HH:mm:ss');

myExec(`rm -rf ${CONFIG.distDir}`)
    .then(() => myExec(`mkdir ${CONFIG.distDir}`))
    .then(generateIndexJS)
    .then(copyDir)
    .then(() => myExec(`git checkout ${CONFIG.branch}`))
    .then(() => myExec(`cp -r ${path.resolve(CONFIG.distDir, '*')} ${CONFIG.projectDir}`))
    .then(() => myExec(`rm -rf ${CONFIG.distDir}`))
    .then(() => myExec('git add .'))
    .then(() => myExec(`git commit -m 'fix: 发布 [${now}]'`))
    .then(() => log('commit success'))
    .catch(log);

// 执行命令的脚本 node bin/dev.js

function log() {
    // eslint-disable-next-line no-console
    console.log.call(console, chalk.green.bold('[ publish script ]'), ...arguments);
}

function myExec(param) {
    return new Promise(function(resolve, reject) {
        try {
            execSync(param);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

function copyDir() {
    const source = path.resolve(__dirname, '..', 'source');
    return CONFIG.copyDir.reduce((prev, next) => {
        return prev.then(() => myExec(`cp -r ${path.resolve(source, next)} ${CONFIG.distDir}`));
    }, Promise.resolve());
}

function generateIndexJS() {
    return new Promise((resolve, reject) => {
        const content = [];
        componentsArr.map(comp => {
            content.push(`import ${comp} from './components/${comp}';`);
        });
        // 换行
        content.push('\n');
        h5Component.map(h5Comp => {
            content.push(`import ${h5Comp} from './h5/components/${h5Comp}';`);
        });
        // 换行
        content.push('\n');
        // 外置组件
        content.push(`const externalComponents = {\n    ${componentsArr.join(',\n    ')}\n};\n`);
        // h5 组件
        content.push(`const h5Components = {\n    ${h5Component.join(',\n    ')}\n};\n`);
        // 导出
        content.push('export default { ...externalComponents, ...h5Components };');

        const index = path.resolve(CONFIG.distDir, 'index.js');
        fs.writeFile(index, content.join('\n'), err => {
            if (err) reject(err);
            resolve();
        });
    });
}
