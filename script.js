console.log('Hello, World!')

const itemsList = document.getElementById('items-list'); 
const itemCard = document.querySelector('.item');

const fetchData = async () => {

const response = await fetch('https://65bb510052189914b5bbb7b1.mockapi.io/sale_list')

const items = await response.json();
console.log(items)
    items.forEach((item) => {

const image = document.createElement('img'); 
image.src = item.image;

const title = document.createElement('h3');
title.innerText = item.title;

const price = document.createElement('h2');
price.innerText = item.price;

const card = document.createElement('div');
card.classList.add('card'); 

card.append(title, image, price);

itemCard.append(card);
      
console.log(item.title);
console.log(item.image);
console.log(item.price);

    });
};
    fetchData();

