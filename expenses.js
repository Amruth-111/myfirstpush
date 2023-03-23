let form=document.querySelector("#my-form");
let add=document.querySelector("#btn");
let amount=document.querySelector("#floatingInput");
let description=document.querySelector("#floatingDes");
let select=document.querySelector("#floatingSelect");
const userList = document.querySelector('#users');
let subform = document.querySelector("#f1");

form.addEventListener("submit",onsubmit);
userList.addEventListener('click',removeitem);

function onsubmit(e){
    e.preventDefault();
    if (amount.value === '' || description.value === '' || select.value === '' ) {
     alert('Please fill all fields');
      } else {
    //delete button
    let del=document.createElement('button');
    del.appendChild(document.createTextNode('Delete'));
    del.className='delete';
    del.id="del"


    //edit button
    let edit=document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));
    edit.className='Edit';
    edit.id="edit";

    //li
    let li=document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(` ${amount.value} ${description.value} ${select.value}`));
    
    li.appendChild(del);
    li.appendChild(edit);
    userList.appendChild(li);
    subform.appendChild(userList);

    let obj={
        amount: amount.value,
        description: description.value,
        category: select.value
    }

    let abc=JSON.stringify(obj)
    localStorage.setItem(obj.category,abc);
    showUserOnScreen(obj);
    }
    }

function removeitem(e){
    e.preventDefault();
    if(e.target.classList.contains("delete")){
        let lii=e.target.parentElement;
        userList.removeChild(lii);
        let obj={
            amount:amount.value,
            description:description.value,
            category:select.value
        }
        let abc=JSON.stringify(obj);
        localStorage.removeItem(obj.category,abc);

        amount.value="";
        select.value="";
        description.value="";
        

    }else if(e.target.classList.contains("Edit")){
        amount.value=amount.value;
        select.value=select.value;
        description.value=description.value;
        let lii=e.target.parentElement;
        userList.removeChild(lii);
        let obj={
            amount: amount.value,
            description: description.value,
            category: select.value
        }
    
        let abc=JSON.stringify(obj)
        localStorage.removeItem(obj.category,abc);
    }
    }
   
 