//in Simple js we can amke elements like h1 and write anything in it
var h1=document.createElement('h1');   //intialize h1 tag
h1.innerHTML="Hello from JS";          //to write something in h1 using innerHTML
document.body.appendChild(h1);         //to append h1 tag in body of html
console.log(h1);                       //to show

//Import/Export
//Importing default export
import a from './app.js';
console.log(a);

//importing named export
import {arr} from './app.js';
console.log(arr);