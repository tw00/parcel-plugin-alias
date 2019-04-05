const fs = require("fs");
const path = require("path");

module.exports = bundler => {
  let options;

  try {
    options = require(path.resolve(bundler.options.rootDir + '/.aliasrc.js'));
    // options = require(path.resolve(__dirname, "../../.aliasrc"));
  } catch (e) {
    // no handler
    console.log("No alias config found in root foler", bundler.options.rootDir )
  }

  if (options) {
    let originResolver = bundler.resolver;
    let originResolveAlias = originResolver.resolveAliases;

    originResolver.resolveAliases = (filename, pkg) => {
      for (let alias in options) {
        let replace = options[alias];
        if (filename.startsWith(alias)) {
          let target = replace + filename.substring(alias.length);
          // console.log("match", filename, '->', target)
          return target;
        }
      }
      return originResolveAlias.call(originResolver, filename, pkg);
    };
  }
};
