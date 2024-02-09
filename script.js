console.log('Hello, World!')

const itemsList = document.getElementById('items-list'); 
const itemCard = document.querySelector('.item');

const fetchData = async () => {

const response = await fetch('https://65bb510052189914b5bbb7b1.mockapi.io/sale_list')

const items = await response.json();
console.log(items)
    items.forEach((item) => {

const image = document.createElement('img'); 
image.src = item.img_url;

const title = document.createElement('h2');
title.innerText = item.title;

const price = document.createElement('h2');
price.innerText = item.price + '€';

const description = document.createElement('p');
description.innerText = item.description;

const location = document.createElement('h3');
location.innerText = item.location;

const date = document.createElement('h4');
date.innerText = 'Item added: ' + item.date;

const card = document.createElement('div');
card.classList.add('card'); 

card.append(title, image, price, description, location, date);

itemCard.append(card);
      
console.log(item.title);
console.log(item.image);
console.log(item.price);

    });
};
    fetchData();

