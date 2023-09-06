// js for drop down menu when screen width is < 800px

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

// js for contact form

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitButton = form.querySelector(".submit-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        showSuccessMessage();
    });

    function showSuccessMessage() {
        const successMessage = document.createElement("p");
        successMessage.textContent = "Thank you for contacting us, we will be in touch shortly!";
        form.appendChild(successMessage);

        form.reset();

        setTimeout(function() {
            fadeOutAndRemove(successMessage);
        }, 5000); 
    }

    function fadeOutAndRemove(element) {
        let opacity = 1;
        const fadeInterval = setInterval(function() {
            if (opacity > 0) {
                opacity -= 0.1;
                element.style.opacity = opacity;
            } else {
                element.remove();
                clearInterval(fadeInterval);
            }
        }, 100);
    }
});

// js for testimonials slider, randomizes the featured slide every website visit

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const testimonialSlides = document.querySelectorAll('.testi-content .slide');

const shuffledSlides = Array.from(testimonialSlides);

shuffleArray(shuffledSlides);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.removeAllSlides();
shuffledSlides.forEach(slide => {
  swiper.appendSlide(slide);
});

// js for tickets button to take the user to the bottom of the page

const ticketsButton = document.getElementById("index-1-btn");

const main3Section = document.getElementById("index-3");

ticketsButton.addEventListener("click", () => {

    main3Section.scrollIntoView({ behavior: "smooth" });
});

// js for one-off and plan buttons to change the content featured in the ticket containers

const oneOffBtn = document.getElementById('one-off-btn');
const planBtn = document.getElementById('plan-btn');

oneOffBtn.addEventListener('click', function () {
  oneOffBtn.classList.add('active');
  planBtn.classList.remove('active');
});

planBtn.addEventListener('click', function () {
  planBtn.classList.add('active');
  oneOffBtn.classList.remove('active');
});

const oneOffButton = document.getElementById('one-off-btn');
const planButton = document.getElementById('plan-btn');

const priceValue = document.querySelector('.price-value');
const textPlan = document.querySelector('.text-plan');

const businessPriceValue = document.querySelector('#business-ticket .price-value');
const vipPriceValue = document.querySelector('#vip-ticket .price-value');
const businessTextPlan = document.querySelector('#business-ticket .text-plan');
const vipTextPlan = document.querySelector('#vip-ticket .text-plan');

oneOffButton.addEventListener('click', () => {
    priceValue.textContent = '$500';
    textPlan.textContent = '/one-time payment';

    businessPriceValue.textContent = '$750';
    businessTextPlan.textContent = '/one-time payment';

    vipPriceValue.textContent = '$1200';
    vipTextPlan.textContent = '/one-time payment';
});

planButton.addEventListener('click', () => {
    priceValue.textContent = '$50';
    textPlan.textContent = '/monthly/12-month contract';

    businessPriceValue.textContent = '$100';
    businessTextPlan.textContent = '/monthly/12-month contract';

    vipPriceValue.textContent = '$150';
    vipTextPlan.textContent = '/monthly/12-month contract';
});
function togglePopup(button) {
    var popup = button.nextElementSibling;
    popup.classList.toggle("show");
}