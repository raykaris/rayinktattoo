alert("Sorry to inform you that currently the tattoo removal service is not available. Also we are working on our Instagram, facebook and twitter accounts. You can join our whatsapp group at the end of this page.");


window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (this.window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");


link1.addEventListener('click', () => {
    scrollToElement('.title', 1);
});

link2.addEventListener('click', () => {
    scrollToElement('.title', 2);
});

link3.addEventListener('click', () => {
    scrollToElement('.title', 3);
});

const typed = new Typed('.multiple-text', {
    strings: ['High quality services','Customer friendly services','Top quality aftercare'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 1000,
    loop: true
});

document.getElementById("menu-icon").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.booking-form form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const date = formData.get('date');
        const time = formData.get('time');
        const message = formData.get('message');

        const mailtoLink = `mailto:rayinkstattoo@gmail.com?subject=Booking Request&body=${encodeURIComponent(
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Service: ${service}\n` +
            `Date: ${date}\n` +
            `Time: ${time}\n` +
            `Message: ${message}`
        )}`;

        window.location.href = mailtoLink;
    });

    
    const bookUsButtons = document.querySelectorAll('.btn-t .btn, .cards .btn');
    bookUsButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.booking-form').scrollIntoView({ behavior: 'smooth' });
        });
    });
});