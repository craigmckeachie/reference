# JavaScript Cheatsheet

### Variable

```js
let myVariable = "a string";
```

### Declaring a Variable

```js
let myVariable;
const myNotChangeableVariable;
```

### Assigning a Variable

```js
let myVariable;
//assignment
myVariable = "something";
```

### Declaring a Variable and Assigning a Variable (initialization)

```js
let myVariable = "something";
```

### Data Types

```js
let myText = "this is a string";
let myNumber = 99; //number
let myBoolean = true; //boolean: true or false

let variable1; //undefined
let variable2 = null; //null
```

### If

```js
let condition = true;
if (condition) {
  console.log("It's true!");
}

condition = false;
if (condition) {
  //won't go here
} else {
  console.log("It's true!");
}
```

### And

```js
let condition1 = true;
let condition2 = true;
if (condition1 && condition2) {
  console.log("both conditions are true");
}
```

### Or

```js
let condition1 = false;
let condition2 = true;
if (condition1 || condition2) {
  console.log(" at least one of the condition is true");
}
```

### Strings

#### Search a String

```js
let haystack = "hayhayhayhayneedlehayhayhayhayhay";
let startPositionOfNeedle = haystack.indexOf("needle");
console.log(startPositionOfNeedle); //12
//note: index starts counting with 0 NOT 1

let haystack1 = "hayhayhayhayhayhayhayhayhay";
let startPositionOfNeedle1 = haystack1.indexOf("needle");
console.log(startPositionOfNeedle1); //-1 which means not found
```

#### Build a Dynamic String

old way:
plus operator to concatenate

```js
let userId = 5;
let url = "http:localhost:3000/users/" + userId;
console.log(url); //http:localhost:3000/users/5
```

Uses: when adding 1 variable (2 maximum) to the beginning or end of the string

new way:
Also, referred to as:

- Substituting placeholder variables
- Template literal string
- String interpolation
- be sure to use back-ticks(``) not single-quotes ('')

```js
let myVariable1 = "aaa";
let myVariable2 = "bbb";
let sentence = `This is text that ${myVariable1} will be ${myVariable2} taken literally.`;
console.log(sentence); //This is text that aaa will be bbb taken literally.
```

Uses: when adding many variables to different parts of the string (multiple pluses) or just because it is easier to read most of the time

### Function

#### Function Declaration

```js
//defining a function
function add(number1, number2) {
  //number1, number2 are parameters
  let result = number1 + number2;
  return result;
}
// 1. function keyword
// 2. function name
// 3. parenthesis() hold the parameters (input variables) separated by commas
// 4. curly braces are a code block and enclose the function body (the steps)

//calling a function
let output = add(2, 2); //function name followed by parenthesis
//          <-------
//when called the function returns its output into the variable on the left
console.log(output); //4
```

#### Arrow Function

summary: shorter version of a full function, a light-weight function

```js
//defining a function
let add = (number1, number2) => {
  let result = number1 + number2;
  return result;
}; //if function is more than one line curly braces ({}) are needed and the return keyword is neeeded

let add = (number1, number2) => number1 + number2;
//if function is one line then curly braces ({}) are not needed and the return keyword is implicit (automatic/assumed)

//calling a function
let output = add(2, 2);
//when called the function returns its output into the output variable
console.log(output); //4
```

#### Anonymous Function

A function without a name

```js
saveButton.onclick = function () {
  console.log("clicked");
};
```

Could be an anonymous arrow function

```js
saveButton.onclick = () => {
  console.log("clicked");
};
```

### For

```js
//old way
let letters = ["a", "b", "c"]; //array of strings
//initializtion;condition;increment
for (let index = 0; index < letters.length; index++) {
  const letter = letters[index];
  console.log(letter);
}

//a
//b
//c

//new way (easier)
let letters = ["a", "b", "c"]; //array of strings

for (let letter of letters) {
  console.log(letter);
}

//a
//b
//c
```

### Object

```js
let myObject = {
  first: "John", //propertyname: value
  last: "Doe",
}; //myObject is an object created using an object literal

console.log(myObject.last);
```

### Array

```js
let letters = ["a", "b", "c"]; //array of strings
for (let letter of letters) {
  console.log(letter);
}
//a
//b
//c


let numbers = [1, 2, 3]; //array of numbers
for (let number of numbers) {
  console.log(number);
}
//1
//2
//3


//array of objects
let people = [
  {
    first: "John",
    last: "Doe",
  },
  {
    first: "Jane",
    last: "Goodale",
  },
  {
    first: "James",
    last: "Madison",
  },
]; //array of objects

for (let person of people) {
  console.log(person.last);
}

```

#### for in

Allows you to loop through the properties of an object

```js
let myObject = {
  first: "John", //propertyname: value
  last: "Doe",
};

for (const propertyName in myObject) {
  console.log(propertyName);
  let value = myObject[propertyName];
  console.log(value);
}

// first;
// John;
// last;
// Doe;
```

### Array Methods

#### find

#### filter

#### map

#### forEach

```

```
