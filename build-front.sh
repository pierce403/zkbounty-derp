cd client
npm run build
rm -rv ../frontend/* ../static/*
cp -v build/* ../frontend
cp -rv build/static/* ../static
