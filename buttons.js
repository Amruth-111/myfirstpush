let form=document.getElementById("addForm");
var itemLister=document.getElementById("items");
let filter=document.getElementById("filter");


 
form.addEventListener("submit",addItem);
itemLister.addEventListener("click",removeitem);
filter.addEventListener("keyup",filterList);
//add item
function addItem(event){
    //prevent default nature
    event.preventDefault();
    //
    //take input value
    let item=document.getElementById("item").value;
    let item2=document.getElementById("itemm").value;
    
    //create a new li
    let itemLi=document.createElement("li");
    //create a text node
    itemLi.className="list-group-item";
    let itemText=document.createTextNode(item);
    let itemText2=document.createTextNode(item2);
    
    //add the text node to the li
    itemLi.appendChild(itemText);

    itemLi.appendChild(itemText2);


    //create a delete button
    var dltbtn=document.createElement("button")
    dltbtn.className="btn btn-danger btn-sm float-right delete";
   
    dltbtn.appendChild(document.createTextNode("X"));
    itemLi.appendChild(dltbtn);

    
    //add the li to the ul
    itemLister.appendChild(itemLi);
    addEdit(itemLi);
  
}
function removeitem(e){
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement;
        itemLister.removeChild(li);
    }
}

let list=document.getElementById("items");
let lis=list.children;
console.log(list);
console.log(lis);
function addEdit(li){
    let btn=document.createElement("button");
    btn.className="btn btn-primary float-right";
    btn.appendChild(document.createTextNode("edit"));
    li.appendChild(btn);
    return li;
}

for(let i=0; i<lis.length; i++) {
    addEdit(lis[i]);
}

function filterList(e) {
    let filterValue=e.target.value.toLowerCase();
    let lis=list.children;
    for(let i=0; i<lis.length; i++) {
        let li=lis[i];
        if(li.textContent.toLowerCase().indexOf(filterValue)>-1){
            li.style.display="block";
        }else{
            li.style.display="none";
        }
    }
}



