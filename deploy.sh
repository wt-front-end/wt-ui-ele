rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@gitee.com:miqilin21/wt-ui-ele.git &&
git push -f -u origin master &&
cd -
echo https://miqilin21.gitee.io/wt-ui-ele