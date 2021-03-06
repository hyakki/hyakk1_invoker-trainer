#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build --base=/invoker-trainer/

# navigate into the build output directory
cd dist

touch .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hyakki/invoker-trainer.git master:gh-pages

cd -
