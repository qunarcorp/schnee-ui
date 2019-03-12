echo 复制master的目录
git checkout master -- source/assets/
git checkout master -- source/common/
git checkout master -- source/components/

eccho 覆盖目录
cp -a source/assets/. ./assets
cp -a source/common/. ./common
cp -a source/components/. ./components

echo 从 git Index 删除source目录下的临时文件
git rm --cached -r source/

rm -rf source/assets
rm -rf source/common
rm -rf source/components

git add common/*
git add assets/*
git add components/*
