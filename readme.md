# Parcel Alias
Better alias for parcel

# Install
```sh
npm install https://github.com/tw00/parcel-plugin-alias.git
```

# Update fork:
- Compatible with parcel-bundler 1.12.3
- Overwrites ```resolveAlias``` instead of ```resolve```
- Fixed issue, where ```aliasrc``` instead of ```.aliasrc``` is loaded
- Works with relative paths other then current root

# Config

Needs an ```.aliasrc.js``` config file in your root directory

```js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  '@/': resolve('../src/'),
  // 'src': resolve('src'),
  // 'assets': resolve('src/assets'),
  // 'components': resolve('src/components'),
  // 'pages': resolve('src/pages'),
  // 'store': resolve('src/store'),
  // 'api': resolve('src/api'),
  // 'common': resolve('src/common'),
}
```
