ydoc build
git checkout gh-pages
if [[ $? == 0 ]]; then
    ls | grep -vE '_site|node_modules|dist|src|build|sign' | xargs rm -rd
    mv _site/* .
    rm -rd _site
    git add .
    git commit -m "Update page"
    # bin/doc.sh 执行此命令,将doc文件内容复制到,gh-pages分支上，自动发布
    # git push
fi