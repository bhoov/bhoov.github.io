const { join } = require("path");

// Keep the downloaded Chrome inside the project (gitignored) instead of ~/.cache.
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
