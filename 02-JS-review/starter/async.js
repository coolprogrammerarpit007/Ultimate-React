const data = require('./data');

//Asynchronous JS

//  there are some states of Promises.
// 1. Promise(Fulfilled)
// 2. Promise Rejected
// 3. Promise Pending

// Promises in JS
const newPromiseData = fetch(`https://jsonplaceholder.typicode.com/todos`).then(res => res.json()).then((data) => console.log(data));
// console.log(newPromiseData);
const getData = async function()
{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const newData = await response.json();
    console.log(newData);

}
getData();
console.log(`ARPIT`);