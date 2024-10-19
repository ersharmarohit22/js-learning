// Key differences
// Here are the main differences between a Map object and a plain object:

// Key types: In a plain object, keys are always strings (or symbols). In a Map, keys can be any type of value, including objects, arrays, and even other Maps.
// Key ordering: In a plain object, the order of keys is not guaranteed. In a Map, the order of keys is preserved, and you can iterate over them in the order they were inserted.
// Iteration: A Map is iterable, which means you can use for...of loops to iterate over its key-value pairs. A plain object is not iterable by default, but you can use Object.keys() or Object.entries() to iterate over its properties.
// Performance: Map objects are generally faster and more efficient than plain objects, especially when dealing with large datasets.
// Methods: A Map object provides additional methods, such as get, set, has, and delete, which make it easier to work with key-value pairs.
// Serialization: When serializing a Map object to JSON, it will be converted to an object but the existing Map properties might be lost in the conversion. A plain object, on the other hand, is serialized to a JSON object with the same structure.

const pojo = { name: 'John doe', work:'actor' }

const map = new Map([['name','John'],['work','actor']])



