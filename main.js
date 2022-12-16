const myForm = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msg = document.querySelector('.msg');
const userList = document.getElementById('users');
const keys = document.getElementById('keys');

//call event to be performed after clinking on submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter fileds';
        setTimeout(()=>msg.remove, 3000);
    }else{
        //create person object
        let person = {
            name: nameInput.value,
            email: emailInput.value
        }
        //create <li> tag to store the user details
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
        //add edit button
        const editbtn = document.createElement('button');
        editbtn.appendChild(document.createTextNode('Edit'));
        li.appendChild(editbtn);
        //add delete button
        const delbtn = document.createElement('button');
        delbtn.appendChild(document.createTextNode('Delete'));
        li.appendChild(delbtn);

        userList.appendChild(li);

        //reset the form
        document.forms[0].reset();
        //store the array in local storage
        localStorage.setItem('userDetails'+person.email, JSON.stringify(person));

    }   
}   