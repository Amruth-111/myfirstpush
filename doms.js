
//query and queryselectorall

let listitem=document.querySelector(".list-group-item:nth-child(2)");
listitem.style.backgroundColor="green";

let listitem1=document.querySelector(".list-group-item:nth-child(3)");
listitem1.style.color="white";

let listitem2=document.querySelectorAll("li");
listitem2[1].style.color="green";

let listitem3=document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<listitem3.length;i++){
    listitem3[i].style.backgroundColor="green";
}

