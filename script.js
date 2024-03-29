document.addEventListener('DOMContentLoaded', function () {

const itemsList = document.getElementById('items-list'); 
const itemCard = document.querySelector('.item');

const fetchData = async () => {

const response = await fetch('https://65bb510052189914b5bbb7b1.mockapi.io/sale_list')

const items = await response.json();
console.log(items)
// =============foreach ciklas==============================
    items.forEach((item) => {
// =======turinys, matomas thumbnail mode========
const image = document.createElement('img'); 
image.src = item.img_url;
image.classList.add('card-image');

const title = document.createElement('h2');
title.innerText = item.title;

const price = document.createElement('h2');
price.innerText = item.price + '€';

const card = document.createElement('div');
card.classList.add('card'); 

card.append(title, image, price);
card.addEventListener('click', () => {
    console.log('click for modal');
    document.body.append(dialog);
    dialog.showModal();
    });
itemCard.append(card);
// =====modalas=================================================
const dialog = document.createElement('dialog');
dialog.classList.add('modal');
dialog.setAttribute('role', 'dialog');

// =====papildomas turinys, matomas tik atidarius modala
const description = document.createElement('p');
description.innerText = item.description;

const location = document.createElement('h3');
location.innerText = item.location;

const date = document.createElement('h4');
date.innerText = 'Item added: ' + item.date;

const contact = document.createElement('h4');
contact.innerText = 'Contact: ' + item.email;

// ===neveikia : uzdaryti modala mouse click uz modalo ribu===
// window.onclick = function(event) {
//     if (event.target == dialog) {
//       dialog.style.display = "none";
//       event.stopPropagation();
//       dialog.close();
//     }
//   }
// ==pridedame modalo close ir jam eventlistneri===
const closeButton = document.createElement('closeButton');
closeButton.classList.add('card-button');
closeButton.innerText = 'close';

closeButton.addEventListener('click', (event) => {
    console.log('click to close modal');

    dialog.style.display='none';
    event.stopPropagation();
    dialog.close();
// ===setinam timouta refreshinti puslapi po uzdarymo==
    setTimeout(() => {
        window.location.assign('../index.html');
    }, 500);
    console.log('item card closed')
});

const deleteButton = document.createElement('deleteButton');
deleteButton.innerText = 'delete item';

deleteButton.classList.add('card-button');

// ===jau deklaruoti objektai klonuojami, papildomi - pridedami i modala==
dialog.append(title.cloneNode(true), image.cloneNode(true), price.cloneNode(true), description, location, date, contact, closeButton, deleteButton);

  itemsList.append(card); 

// =============modal: item delete function======================= 
    deleteButton.addEventListener('click', async () => {
    console.log('click to delete item');
 
    const response = await fetch(`https://65bb510052189914b5bbb7b1.mockapi.io/sale_list/${item.id}`, 
    {
        method: 'DELETE',
    
    });

const deleteItemResponse = await response.json();

if (item){
        setTimeout(() => {  
        message.innerText = 'Item deleted successfully';
        console.log('Modal close timout');
        dialog.style.display = 'none';
        dialog.close();
    }, 1000); 
    console.log('Item deleted successfully');
   
    window.location.reload();

};

});

});
  
};
    fetchData();
    // =============menu responsive function=======================
     navBarFunction=()=> {
        var x = document.getElementById("myNavbar");
        console.log('click for navBarFunction');
        if (x.className === "menu") {
            x.className += " responsive";
            console.log('className responsive');
        } else {
            x.className = "menu";
            console.log('className menu')
        }
    };
    // ========================send email=================
 const div = document.getElementById('email-form');

const emailFormName = document.createElement('input');
emailFormName.classList.add('email-form-name');
emailFormName.placeholder = 'Name';


const emailFormEmail = document.createElement('input');
emailFormEmail.classList.add('email-form-email');
emailFormEmail.placeholder = 'Email';

const emailFormMessage = document.createElement('input');
emailFormMessage.classList.add('email-form-message');
emailFormMessage.placeholder = 'Message';

const emailFormButton = document.createElement('button');
emailFormButton.classList.add('email-form-button');
emailFormButton.innerText = 'Send';

emailFormButton.addEventListener('click', () => {
    console.log('click for emailFormButton');
// =================verifikacija=======
    if (!emailFormName.value || !emailFormMessage.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailFormEmail.value)) {
      alert('please, fill in correct information');
      return;
    }else{
// ===============
    div.style.display = "none";
       alert('email sent');
    }
});

div.append(emailFormName, emailFormEmail, emailFormMessage, emailFormButton);


const emailSendButton = document.getElementById('email-btn');
emailSendButton.addEventListener('click', () => {
   
            if (div.style.display === "none") {
              div.style.display = "flex";
            } else {
              div.style.display = "none";
            }
          });

});