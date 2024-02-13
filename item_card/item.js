const title = document.getElementById('title');
const price = document.getElementById('price');
const imgUrl = document.getElementById('imgUrl');
const locationInput = document.getElementById('location');
const description = document.getElementById('description');
const email = document.getElementById('email');
// let date = document.getElementById('date');

const button = document.getElementById('btn'); 
const  message = document.getElementById('message'); 

button.addEventListener('click', async () => {
  console.log('add button click')
  if (!title.value || !price.value || !locationInput.value || !description.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
    message.innerText = 'all slots fill required';
    return;
  }

    const itemData = {
        title: title.value,
        price: price.value,
        img_url: imgUrl.value,
        location: locationInput.value,
        description: description.value,
        email: email.value,
        // date: Date.now(),
    };
console.log(itemData);

    const response = await fetch('https://65bb510052189914b5bbb7b1.mockapi.io/sale_list', {
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

function navBarFunction() {
    var x = document.getElementById("myNavbar");
    console.log('click for navBarFunction');
    if (x.className === "menu") {
        x.className += " responsive";
        console.log('className responsive');
    } else {
        x.className = "menu";
        console.log('className menu')
    }
}

