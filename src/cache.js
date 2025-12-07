const fs = require("fs");
const CACHE_FILE = "../data/cache.json";

let cache = { posts: [], users: [] };

function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  }
}

function saveCache() {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

function setCache(key, data) {
  cache[key] = data;
  saveCache();
}

function getCache(key) {
  return cache[key];
}

loadCache();

module.exports = { getCache, setCache };
