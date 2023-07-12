# FileCache

A simple file-based cache implementation using Node.js <img align="center" alt="Miguel-NodeJS" height="30" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"/>

## Installation

```shell
npm install https://github.com/18Miguel/FileCache
```

## Usage

```javascript
const FileCache = require('file-cache');

// Create a new instance of FileCache
const cache = new FileCache();

// Set a value in the cache
cache.set('key', 'value');

// Get a value from the cache
console.log(cache.get('key')); // Output: value

// Remove a value from the cache
cache.delete('key');

// Clear the entire cache
cache.clear();
```

## API

### `new FileCache(filename)`

Creates an instance of FileCache.

- `filename` (optional): Custom filename for the cache. If not provided, a default filename will be generated.

### `cache.set(key, value)`

Sets a value in the cache for the given key.

- `key`: The cache key.
- `value`: The value to be cached.

### `cache.get(key)`

Retrieves a value from the cache for the given key.

- `key`: The cache key.
- Returns: The cached value.

### `cache.take(key)`

Retrieves and removes the value from the cache for the given key.

- `key`: The cache key.
- Returns: The cached value.

### `cache.delete(key)`

Removes the value from the cache for the given key.

- `key`: The cache key.

### `cache.clear()`

Clears the cache by removing all key-value pairs.
