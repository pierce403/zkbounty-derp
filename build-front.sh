cd client
npm run build
git rm ../frontend/* ../static/*
cp -v build/* ../frontend
cp -rv build/static/* ../static
cd ..
git add frontend
git add static
