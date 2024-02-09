const itemsList = document.getElementById('items-list'); 
const itemCard = document.querySelector('.item');
// itemCard.classList.add('card');

const fetchData = async () => {

const response = await fetch('https://65bb510052189914b5bbb7b1.mockapi.io/sale_list')

const items = await response.json();
console.log(items)
// =============foreach ciklas==============================
    items.forEach((item) => {
// =======turinys, matomas thumbnail mode
const image = document.createElement('img'); 
image.src = item.img_url;

const title = document.createElement('h2');
title.innerText = item.title;

const price = document.createElement('h2');
price.innerText = item.price + '€';

const card = document.createElement('div');
card.classList.add('card'); 

card.append(title, image, price);

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
// ===jau deklaruoti objektai klonuojami, papildomi - pridedami
dialog.append(title.cloneNode(true), image.cloneNode(true), price.cloneNode(true), description, location, date);

//  eventlistneris modalui
card.addEventListener('click', () => {
    console.log('click for modal');
    document.body.appendChild(dialog);
    dialog.showModal();
// =======pridedame modalo uzdarymo mygtuka=
const closeButton = document.createElement('button');
closeButton.innerText = 'Close';
closeButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dialog.close();
});

dialog.append(closeButton);
    });

    itemsList.append(card); 
});
};
    fetchData();
