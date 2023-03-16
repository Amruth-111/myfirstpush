let listitems=document.querySelector("#items");
console.log(listitems.parentElement);
console.log(listitems.parentNode);
console.log(listitems.parentNode.parentNode);
console.log(listitems.lastChild);
console.log(listitems.lastElementChild);
console.log(listitems.firstElementChild);
console.log(listitems.firstChild);
console.log(listitems.nextElementSibling);
console.log(listitems.previousElementSibling);
console.log(listitems.previousSibling);
console.log(listitems.nextSibling);

let newDiv=document.createElement("div");
console.log(newDiv);
newDiv.className="hello";
newDiv.setAttribute('title',"new div");
newDiv.id="hello";
let newTextNode=document.createTextNode("hello world")
newDiv.appendChild(newTextNode);

let container=document.querySelector("header .container");
let h1=document.querySelector("header h1");

console.log(container);

container.insertBefore(newDiv,h1)


let li=document.createElement("li");

let next=document.createTextNode("hello world");
li.appendChild(next);
console.log(li);
let doom=document.querySelector(".container:nth-child(2)  ul");
let ul=document.querySelector("li:nth-child(1)");


doom.insertBefore(li,ul);


