#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 发布到自定义域名
# echo 'www.suressk.com/note' > CNAME

git init
git add -A
git commit -m 'deploy'

# my github
# githubUrl=git@github.com:suressk/suressk.github.io

# 部署到 https://suressk.github.io
git push -f git@github.com:suressk/suressk.github.io.git master

# 部署到 https://suressk.github.io/note
# git push -f git@github.com:suressk/note.git master:gh-pages

cd -