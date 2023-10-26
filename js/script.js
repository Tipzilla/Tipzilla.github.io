$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('index.html').on('scroll load',function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($('index.html').scrollTop() > 0) {
            $('.top').show();
        }
        else {
            $('.top').hide();
        }

    });    
    

    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });

    // Function to calculate age
    function calculateAge(birthdate) {
        var today = new Date();
        var birthDate = new Date(birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Set birthdate in the format YYYY-MM-DD
    var birthdate = '1998-12-13'; 

    var ageLabel = document.getElementById('age-label');
    var ageElement = document.getElementById('age');

    function updateAge() {
        var age = calculateAge(birthdate);
        ageElement.textContent = age;
    }

    updateAge(); // Initial age update
});
// Initialize the first slideshow
initializeSlideshow('slideshow-1');

function initializeSlideshow(slideshowId) {
    let slideIndex = 1;
    showSlides(slideIndex, slideshowId);

    // Next/previous controls
    function plusSlides(n) {
        showSlides((slideIndex += n), slideshowId);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides((slideIndex = n), slideshowId);
    }

    function showSlides(n, id) {
        let i;
        let slides = document.querySelectorAll(`#${id} .mySlides`);
        let dots = document.querySelectorAll(`#${id} .dot`);

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Attach event listeners to next and previous buttons
    document.querySelector(`#${slideshowId} .prev`).addEventListener('click', () => plusSlides(-1));
    document.querySelector(`#${slideshowId} .next`).addEventListener('click', () => plusSlides(1));

    // Attach event listeners to dot indicators
    const dots = document.querySelectorAll(`#${slideshowId} .dot`);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all the portfolio images
    const portfolioImages = document.querySelectorAll(".box img");
  
    portfolioImages.forEach(function (image, index) {
      const projectSection = document.getElementById(`project-${index + 1}`);
  
      image.addEventListener("click", function () {
        // Hide all project sections
        const projectSections = document.querySelectorAll(".project");
        projectSections.forEach(function (section) {
          section.style.display = "none";
        });
  
        // Show the selected project section
        projectSection.style.display = "block";
  
        // Scroll to the selected project section
        projectSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  $(".btn").click(function() {
    const category = $(this).data("category");
    
    // Remove the "active" class from all buttons within the same portfolio section
    $(this).siblings(".btn").removeClass("active");
    $(this).addClass("active");
    
    const portfolioSection = $(this).closest(".portfolio");
    
    if (category === "all") {
        // Show all boxes within the same portfolio section
        portfolioSection.find(".box").show();
    } else {
        // Hide all boxes within the same portfolio section
        portfolioSection.find(".box").hide();
        // Show the boxes with the selected category within the same portfolio section
        portfolioSection.find(`.box[data-category="${category}"]`).show();
    }
});

document.getElementById("project-4-download").addEventListener("click", function() {
  // Define the file URL you want to download
  const fileURL = "downloads/ATM Machine.py";

  // Create an anchor element
  const anchor = document.createElement("a");
  anchor.href = fileURL;

  // Set the download attribute to specify the filename
  anchor.download = "ATM Machine.py";

  // Simulate a click event on the anchor element
  anchor.click();
});

document.getElementById("cv-download").addEventListener("click", function() {
    // Define the file URL you want to download
    const fileURL = "downloads/Hamish Getty's CV.pdf";
  
    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = fileURL;
  
    // Set the download attribute to specify the filename
    anchor.download = "downloads/Hamish Getty's CV.pdf";
  
    // Simulate a click event on the anchor element
    anchor.click();
  });