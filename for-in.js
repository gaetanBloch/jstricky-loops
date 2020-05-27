const user = {
  name: 'Gaetan',
  age: 31,
  greet() {
    console.log('Hello');
  }
};

// This value won't be displayed because it is not own property of user
user.__proto__.type = 'human';

for (const key in user) {
  // To avoid using inherited properties
  if (user.hasOwnProperty(key)) {
    console.log(key);
    console.log(user[key]);
  }
}
