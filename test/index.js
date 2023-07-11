const FileCache = require('../file-cache');

const cache = new FileCache();

cache.set('key', 'value');
cache.set('key2', 'value2');
cache.set('obj', { name: 'ABCdef', id: 132 });

console.log(cache.get('key'));
console.log(cache.take('key2'));
console.log(cache.get('key2'));
console.log(cache.get('obj'));

cache.delete('obj');
console.log(cache.get('obj'));
cache.set('obj', { name: 'ABCdefUPS', id: 231 });

cache.clear();
console.log(cache.take('key'));
cache.set('key', 'value');
console.log(cache.take('key'));
console.log(cache.get('obj'));
console.log(cache.get('key2'));