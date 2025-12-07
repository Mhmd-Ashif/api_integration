const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../data");
const CACHE_FILE = path.join(DATA_DIR, "cache.json");

let cache = { posts: [], users: [] };

function ensureCacheFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(CACHE_FILE)) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
  }
}

function loadCache() {
  ensureCacheFile(); 
  const fileContent = fs.readFileSync(CACHE_FILE, "utf8");

  try {
    cache = JSON.parse(fileContent);
  } catch (err) {
    console.error("❌ cache.json is malformed. Resetting.");
    cache = { posts: [], users: [] };
    saveCache();
  }
}

function saveCache() {
  ensureCacheFile(); 
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
