## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




# Make sure you're on your development branch (e.g., dev or main)
git checkout dev  # or main

# Make your changes, then commit
git add .
git commit -m "Your changes"
git push origin dev

# Switch to gh-pages and merge
git checkout gh-pages
git merge dev  # or main

# Build and deploy
npm run build
cd dist
git add .
git commit -m "Deploy latest changes"
git push origin gh-pages

# Switch back to development branch
cd ..
git checkout dev