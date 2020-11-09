'use strict'

const hello = ['hello', 'I', 'am', 'Ahsen'];
const countries = ['The Netherlands', 'Germany', 'Turkey', 'USA', 'Italy', 'Canada', 'Norway'];

console.log('The length of the array is...' + hello.length);
console.log('The length of the array is...' + countries.length);

if (hello.length == countries.length)
{
    console.log("They are the same!");
} 
else
{
    console.log("Two different sizes");
};