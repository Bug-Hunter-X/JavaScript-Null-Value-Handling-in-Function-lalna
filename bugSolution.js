function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Handle null values by throwing an exception
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); // Throws an Error
//console.log(foo(1, null)); // Throws an Error
//console.log(foo(null, null));// Throws an Error