// // JavaScript Code goes here
// console.log("Internal JS console message.")
// console.log(document)
// // console.dir(document)
// // // alert("Hello world") // Textbox pop-up

// // window.onload = function(){
// //     alert("Hello")
// // }

// // PROMPTS //

// // const student = prompt("What is your name")
// // console.log(student);
// // // writes to document, but does not work 
// // document.write(`<p>Hello, ${student}!</p>`);

// const student = prompt("What is your name");
// const messageElement = document.createElement("p")// Creates new p element
// messageElement.textContent = `Hello, ${student}`;
// document.body.appendChild(messageElement)

// // WRITE TO ELEMENT BY IDs //
// // document.getElementById("myH1").innerHTML = "I hate JavaScript";
// // document.getElementById("myParagraph").textContent = "I have Java";

// // STYLING page elements //

// // document.body.style.color = "green"
// // document.body.style.backgroundColor = "black"
// // document.body.style.fontSize = "2em"

// // EVENT LISTENERS //
// document.getElementById("myH1").addEventListener("click", function(){
//     document.getElementById("myH1").style.color = "red"
// });

// document.getElementById("myH1").addEventListener("mouseover", function(){
//     document.getElementById("myH1").style.color = "orange"
// })

// document.getElementById("myParagraph").addEventListener("dblclick", function(){
//     document.getElementById("myParagraph").style.fontSize = "2em"
// })

// document.getElementById("myButton").addEventListener("click", function(){
//     document.body.style.backgroundColor = "black";
//     document.getElementById("myParagraph").style.color = "White"
// });

// // Difference between .innerHTML and .textContent
// console.log(document.getElementById("myParagraph").innerHTML)
// console.log(document.getElementById("myParagraph").textContent)

// Variables //
// let x; // Declaration
// const y = 10; //Initializing
// let z = 3; //Both

// // x = "hello" //string
// console.log(x)

// z = true; //boolean
// console.log(z)

// let person = prompt("What is thy name")
// console.log(person)
// //window.alert(`Hello, your name is ${person}`); //backticks are manditory

// let online = false;
// console.log(online)
// console.log(`Online Status: ${online}`)
// let enrolled = true;
// console.log(enrolled)
// console.log(`Enrolled: ${enrolled}`)

// ARITHMETIC OPERATORS = Operand
// +, -, *, /, **, %, ++, --

// let students = 24;
// console.log(students)
// students = students + 1;
// console.log(students)
// students += 1;
// students --;
// console.log(students)
// students ++;
// console.log(students)

// Order of Operations

// let className = "WEB-115";
// console.log(className)
// console.log(typeof className)
// console.log(className, typeof className)
// mynumber = 5;
// console.log(typeof mynumber)
// mynumber = 5.00;
// console.log(typeof mynumber)

// let myage = window.prompt("How old are you?")
// console.log(typeof myage)
// myage = Number //Convert to number
// console.log(typeof myage)

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x)
console.log(x)
y = String(y)
console.log(typeof y)
z = Boolean(z);
console.log(z) //