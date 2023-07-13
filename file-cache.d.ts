declare class FileCache {
    /**
     * Creates an instance of FileCache.
     * @param {string} [filename] - Optional custom filename for the cache.
     * @param {string} [filepath] - Optional custom file path for the cache.
     * @throws {Error} Throws an error if the provided filename contains invalid characters.
     */
    constructor(filename?: string, filepath?: string);

    /**
     * Checks if the cache contains a value for the given key.
     * @param {string} key - The cache key to check.
     * @returns {boolean} Returns true if the cache has a value for the key, false otherwise.
     */
    has(key: string): boolean;

    /**
     * Sets a value in the cache for the given key.
     * @param {string} key - The cache key.
     * @param {*} value - The value to be cached.
     */
    set(key: string, value: any): void;

    /**
     * Retrieves a value from the cache for the given key.
     * @param {string} key - The cache key.
     * @returns {*} The cached value.
     */
    get(key: string): any;

    /**
     * Retrieves and removes the value from the cache for the given key.
     * @param {string} key - The cache key.
     * @returns {*} The cached value.
     */
    take(key: string): any;

    /**
     * Removes the value from the cache for the given key.
     * @param {string} key - The cache key.
     */
    delete(key: string): void;

    /**
     * Clears the cache by removing all key-value pairs.
     */
    clear(): void;
}

export = FileCache;
