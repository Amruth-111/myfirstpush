let form=document.getElementById("addForm");
var itemLister=document.getElementById("items");
 
form.addEventListener("submit",addItem);
itemLister.addEventListener("click",removeitem);
//add item
function addItem(event){
    //prevent default nature
    event.preventDefault();

    //take input value
    let item=document.getElementById("item").value;
    console.log(item);
    //create a new li
    let itemLi=document.createElement("li");
    //create a text node
    itemLi.className="list-group-item";
    let itemText=document.createTextNode(item);
    //add the text node to the li
    itemLi.appendChild(itemText);


    //create a delete button
    var dltbtn=document.createElement("button")
    dltbtn.className="btn btn-danger btn-sm float-right delete";
   
    dltbtn.appendChild(document.createTextNode("X"));
    itemLi.appendChild(dltbtn);

    
    //add the li to the ul
    itemLister.appendChild(itemLi);
  
}
function removeitem(e){
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement;
        itemLister.removeChild(li);
    }
}

let list=document.querySelectorAll(".container:nth-child(2) .list-group-item");
console.log(list[0]);
//let ul=document.querySelectorAll("li:nth-child(odd)");
let edit=document.createElement("button");
edit.className="btn btn-primary float-right";
edit.appendChild(document.createTextNode("edit"));

// console.log(ul);
let itemlLister=document.getElementById("items");
// console.log(itemlLister);
for(let i=0; i<list.length; i++) {
    list[i].appendChild(edit);
}
