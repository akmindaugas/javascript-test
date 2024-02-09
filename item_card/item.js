const title = document.getElementById('title');
const price = document.getElementById('price');
const imgUrl = document.getElementById('imgUrl');
const button = document.getElementById('btn'); 
const  message = document.getElementById('message'); 

button.addEventListener('click', async () => {
  console.log('click')
    if(!title.value || !price.value) {
    message.innerText = 'complete the form';
return};


    const itemData = {
        title: title.value,
        price: price.value,
        imgUrl: imgUrl.value
    };

    const response = fetch('https://sophisticated-humane-dandelion.glitch.me', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
        });


const addedItem =   await response.json();

message.innerText = 'Item added successfully';

setTimeout(() => {
    window.location.assign('../index.html');
}, 1000);
console.log(addedItem)
  
    });

