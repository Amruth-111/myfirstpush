//console.dir(document);
//examine doc object;
// console.log(document.domain)
// console.log(document.url);
// console.log(document.title);
// console.log(document.head)
// console.log(document.body)  
// console.log(document.all);

let headerTitle=document.getElementById("header-title");
console.log(headerTitle);
headerTitle.innerText="hello";
headerTitle.textContent="hello world";
headerTitle.style.color="red";

let header=document.getElementById("main-header");
header.style.borderBottom="solid 3px black";

let additems=document.getElementsByClassName("title");
additems[0].style.color="green";
additems[0].style.fontWeigth="bold";
