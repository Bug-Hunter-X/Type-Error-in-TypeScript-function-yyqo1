function add(a: number, b: number): number {
  return a + b;
}

function addWithCheck(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'string'){
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number'){
    return parseFloat(a) + b;
  } else {
    return 0; // Handle other cases as needed
  }
}

let result1 = add(10, 20); // Correct usage
let result2 = addWithCheck("hello", 10); // Correct usage
let result3 = addWithCheck(10, "10"); // Correct usage
console.log(result1,result2,result3); // Output: 30, "hello10", 20 