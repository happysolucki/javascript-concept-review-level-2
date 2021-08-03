// Ex 1. Text Manipulation and Arrays
const exercise1 = (phrase) => {
  console.log('Exercise 1');
  const modified = phrase.toLowerCase().split(' ');
  for (let i = 1; i < modified.length; i+=2) {
    modified[i] = modified[i].toUpperCase();
  }
  const result = modified.join(' ');
  console.log(result);
  return result;
}
// Ex 2. Text Manipulation and Arrays
const exercise2 = (word) => {
  console.log('Exercise 2');
  if (word === word.toLowerCase()) {
    console.log(word.toUpperCase());
    return word.toUpperCase();
  }
  if (word === word.toUpperCase()) {
    console.log(word.toLowerCase());
    return word.toLowerCase();
  }
  console.log(`Input wasn't in all caps or all lower. Take back your word: ${word}`);
  return `Input wasn't in all caps or all lower. Take back your word: ${word}`
}
// Ex 3a. Return first n number of elements
const first = (arr,num) => {
  console.log(arr.slice(0, num));
  return arr.slice(0, num);
}
// Ex 3b. Return last n number of elements
const last = (arr,num) => {
  console.log(arr.slice(-num));
  return arr.slice(-num);
}

const exercise3 = () => {
  console.log('Exercise 3');
  first([2,3,9,7,4,5],3);
  last([2,3,9,7,4,5],4);
}
// Ex 4. Remove element with specific value from array
const exercise4 = (arr,unwanted) => {
  console.log('Exercise 4');
  arr = arr.filter((item) => item !== unwanted);
  console.log(arr);
  return arr;
}

// Ex 5. Pet List
const exercise5 = () => {
  console.log('Exercise 5');
  const pet_list = [];

  const pet1 = {
    type: 'cat',
    age: 7,
    color: 'gray'
  }

  const pet2 = {
    type: 'dog',
    age: 11,
    color: 'brown'
  }

  const pet3 = {
    type: 'parrot',
    age: 5,
    color: 'rainbow'
  }

  pet_list.push(pet1, pet2, pet3);

  for (const pet of pet_list) {
    console.log(`Type of pet: ${pet.type}`)
    console.log(`Age of pet: ${pet.age}`)
    console.log(`Color of pet: ${pet.color}`)
    console.log("=============================");
  }

}

const main = () => {
  exercise1('How could you be such a hater');
  exercise2('allderdice');
  exercise3();
  exercise4([3,4,7,6,7,9,2],7);
  exercise5();
}

main();
