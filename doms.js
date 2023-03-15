

let additems=document.getElementsByClassName("list-group-item");
additems[2].style.backgroundColor="green";
for(let i=0;i<additems.length;i++){
    additems[i].style.fontWeight="bold";
    additems[i].style.color="red";//boom boom didnt turn into red.
}


// let li=document.getElementsByTagName("li");
// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight="bold";
//     li[i].style.color="red";//all li tags turns red including boom boom;
// }