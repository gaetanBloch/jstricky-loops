const user = {
  name: 'Gaetan',
  age: 31,
  greet() {
    console.log('Hello');
  }
};

for (const entry of Object.entries(user)) {
  console.log(entry);
}

for (const key of Object.keys(user)) {
  console.log(key);
}

for (const value of Object.values(user)) {
  console.log(value);
}

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(i);
  console.log(numbers[i]);
}
