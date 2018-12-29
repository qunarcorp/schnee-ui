ydoc build
git checkout gh-pages
ls | grep -v _site | xargs rm -rd
mv _site/* .
rm -rd _site
git add .
git commit -m "Update page"
# git push