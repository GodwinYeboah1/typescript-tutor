const character = 'lugi';

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

const Greeting = (name:string) => {
  return "Good morning " + name.toUpperCase();
}
console.log(Greeting("godwin"));

// union types
let mixed: (string|number|boolean|object)[] = [];

mixed.push({name:'godwin', age:27});
mixed.push(20);
mixed.push(false);
console.log(mixed);

let human: object;

human = {name:'godwin'};
console.log(human);
