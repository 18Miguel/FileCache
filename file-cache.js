const { existsSync, readFileSync, writeFileSync, unlinkSync } = require('fs');
const { tmpdir } = require('os');

class FileCache {
  #filename;
  #cache;

  /**
   * Creates an instance of FileCache.
   * @param {string} [filename] - Optional custom filename for the cache.
   * @param {string} [filepath] - Optional custom file path for the cache.
   * @throws {Error} Throws an error if the provided filename contains invalid characters.
   */
  constructor(filename, filepath) {
    if (filename && !filename.match(/^[^.\s\\/]+$/))
      throw new Error('Invalid filename provided. Filename must not contain spaces or special characters.');

    this.#filename = filename
      ? `${filepath ? filepath : tmpdir()}/${filename}.json`
      : `${filepath ? filepath : tmpdir()}/file_cache.json`;
    this.#cache = {};
    this.#loadCache();
  }

  #loadCache() {
    try {
      if (existsSync(this.#filename)) {
        const data = readFileSync(this.#filename, 'utf8');
        this.#cache = JSON.parse(data);
      } else {
        this.#cache = {};
      }
    } catch (error) {
      console.error('[FileCache] Error loading cache:', error);
      this.#cache = {};
    }
  }

  #saveCache() {
    try {
      writeFileSync(this.#filename, JSON.stringify(this.#cache, null, 4), 'utf8');
    } catch (error) {
      console.error('[FileCache] Error saving cache:', error);
    }
  }

  /**
   * Checks if the cache contains a value for the given key.
   * @param {string} key - The cache key to check.
   * @returns {boolean} Returns true if the cache has a value for the key, false otherwise.
   */
  has(key) {
    return key in this.#cache;
  }

  /**
   * Sets a value in the cache for the given key.
   * @param {string} key - The cache key.
   * @param {*} value - The value to be cached.
   */
  set(key, value) {
    this.#cache[key] = value;
    this.#saveCache();
  }

  /**
   * Retrieves a value from the cache for the given key.
   * @param {string} key - The cache key.
   * @returns {*} The cached value.
   */
  get(key) {
    return this.#cache[key];
  }

  /**
   * Retrieves and removes the value from the cache for the given key.
   * @param {string} key - The cache key.
   * @returns {*} The cached value.
   */
  take(key) {
    const value = this.get(key);
    this.delete(key);
    return value;
  }

  /**
   * Removes the value from the cache for the given key.
   * @param {string} key - The cache key.
   */
  delete(key) {
    delete this.#cache[key];
    this.#saveCache();
  }

  /**
   * Clears the cache by removing all key-value pairs.
   */
  clear() {
    this.#cache = {};
    unlinkSync(this.#filename);
  }
}

module.exports = FileCache;
