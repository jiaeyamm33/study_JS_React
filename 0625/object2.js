let userData = {
  name: 'jason',
  age: 25,
  gender: 'Male'
}

userData.greeting = 'hi';

let key = 'name'

if(userData.name == 'jason') {
  console.log(userData[key]);
}

let keyLists = Object.keys(userData);
console.log(keyLists);


let checked = keyLists.includes('greeting');
console.log(checked);

let valueList = Object.values(userData);
console.log(valueList);