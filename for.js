// Value will be overwritten
var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// Output 5 because i is Globally Scoped
console.log(i);

// Value will be overwritten
let j = 10;

for (let j = 0; j < 5; j++) {
  console.log(j);
}

// Reference Error because j is Block Scoped
// console.log(j);
