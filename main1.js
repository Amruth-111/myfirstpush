// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeitem);


function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    let del=document.createElement('button');
    del.appendChild(document.createTextNode('Delete'));
    del.className='delete';

    let edit=document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));
    edit.className='delete';
    edit.id="edit";
    //edit.addEventListener('click',edititem);
    function edititem(){
        nameInput.value="";
        emailInput.value="";
      
    }
    


    let li= document.createElement('li');
    li.classList.add('list-group-item');
    
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    li.appendChild(del);
    li.appendChild(edit);

    //li.innerHTML = `Name: ${nameInput.value} <br> Email: ${emailInput.value}`;
    userList.appendChild(li);

    
       
    }
    let obj={
        name: nameInput.value,
        email: emailInput.value
    }

    let abc=JSON.stringify(obj)
    localStorage.setItem(obj.email,abc);
    showUserOnScreen(obj);
   
    // localStorage.setItem("name",nameInput.value);
    // localStorage.setItem("email",emailInput.value);
    edititem();
    
  }
  
  function removeitem(e){
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement;
        userList.removeChild(li);
        let obj={
            name: nameInput.value,
            email: emailInput.value
        }
        let abc=JSON.stringify(obj);
        localStorage.removeItem(obj.email,abc);
    }
}




  

  

