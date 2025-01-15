// JavaScript Code goes here
console.log("Internal JS console message.")
console.log(document)
// console.dir(document)
// // alert("Hello world") // Textbox pop-up

// window.onload = function(){
//     alert("Hello")
// }

// PROMPTS //

// const student = prompt("What is your name")
// console.log(student);
// // writes to document, but does not work 
// document.write(`<p>Hello, ${student}!</p>`);

const student = prompt("What is your name");
const messageElement = document.createElement("p")// Creates new p element
messageElement.textContent = `Hello, ${student}`;
document.body.appendChild(messageElement)

// WRITE TO ELEMENT BY IDs //
// document.getElementById("myH1").innerHTML = "I hate JavaScript";
// document.getElementById("myParagraph").textContent = "I have Java";

// STYLING page elements //

// document.body.style.color = "green"
// document.body.style.backgroundColor = "black"
// document.body.style.fontSize = "2em"

// EVENT LISTENERS //
document.getElementById("myH1").addEventListener("click", function(){
    document.getElementById("myH1").style.color = "red"
});

document.getElementById("myH1").addEventListener("mouseover", function(){
    document.getElementById("myH1").style.color = "orange"
})

document.getElementById("myParagraph").addEventListener("dblclick", function(){
    document.getElementById("myParagraph").style.fontSize = "2em"
})

document.getElementById("myButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    document.getElementById("myParagraph").style.color = "White"
});

// Difference between .innerHTML and .textContent
console.log(document.getElementById("myParagraph").innerHTML)
console.log(document.getElementById("myParagraph").textContent)