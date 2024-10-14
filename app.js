const laundryServices = {
    washAndFold: { serviceName: "Wash & Fold", price: 10 },
    dryCleaning: { serviceName: "Dry Cleaning", price: 20 },
    ironing: { serviceName: "Ironing", price: 5 },
    washIron: { serviceName: "Wash & Iron", price: 15 },
    premiumLaundry: { serviceName: "Premium Laundry", price: 30 },
    stainRemoval: { serviceName: "Stain Removal", price: 8 }
};

document.querySelector('.bttn').addEventListener('click', function() {
    document.querySelector('.service').scrollIntoView({ behavior: 'smooth' });
});

const nill = document.getElementsByClassName('nill');
let sum = 0;

Object.values(laundryServices).forEach(service => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.innerText = "Add +";

    const servicesDiv = document.createElement('div');
    servicesDiv.classList.add('service-entry');

    const serviceInfo = document.createElement('p');
    serviceInfo.innerText = `${service.serviceName} - $${service.price}`;

    servicesDiv.appendChild(serviceInfo);
    servicesDiv.appendChild(addBtn);
    document.getElementById("services").appendChild(servicesDiv);

    const addItemDiv = document.getElementById('addItem');
    const addItemPriceDiv = document.getElementById('addItemPrice');
    const totalPrice = document.getElementById("totalPrice");

    let itemAdded = false;
    let addItemElement = null;
    let addItemPriceElement = null;

    addBtn.addEventListener('click', () => {
        if (!itemAdded) {
            addItemElement = document.createElement('p');
            addItemElement.classList.add('addItem');
            addItemElement.innerText = service.serviceName;
            addItemDiv.appendChild(addItemElement);

            addItemPriceElement = document.createElement('p');
            addItemPriceElement.classList.add('addItemPrice');
            addItemPriceElement.innerText = "$" + service.price;
            addItemPriceDiv.appendChild(addItemPriceElement);

            if (nill.length > 0) {
                nill[0].style.display = "none";
            }

            sum += service.price;
            totalPrice.innerText = `$${sum}`;

            addBtn.innerText = "Remove";
            itemAdded = true;
        } else {
            addItemDiv.removeChild(addItemElement);
            addItemPriceDiv.removeChild(addItemPriceElement);

            sum -= service.price;
            totalPrice.innerText = `$${sum}`;

            if (sum === 0 && nill.length > 0) {
                nill[0].style.display = "block";
            }

            addBtn.innerText = "Add +";
            itemAdded = false;
        }
    });
});

const bookingForm = document.getElementById('bookingForm');
const bookNowBtn = document.getElementById('bookNowBtn');

bookNowBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!fullName || !email || !phone) {
        alert('Please fill in all the fields.');
    } else {
        alert(`Booking Confirmed for ${fullName}`);
    }
});

function sendMail(){
    let parms = {
        name : document.getElementById("fullName").value,
        email : document.getElementById("email").value,
        number : document.getElementById("phone").value,
        }

        emailjs.send("service_f4ljxdk","template_2s5wwdj",parms).then(alert("Email has been sent!"))
}