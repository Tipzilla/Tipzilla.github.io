// Wait for the document to be fully loaded and ready
$(document).ready(function() {

    // When the element with the ID 'menu' is clicked
    $('#menu').click(function() {
        // Toggle the 'fa-times' class, used for changing the menu icon
        $(this).toggleClass('fa-times');
        
        // Toggle the 'toggle' class on the 'header' element, which controls the menu visibility
        $('header').toggleClass('toggle');
    });

    // When a link (anchor 'a') is clicked
    $('a').on('click', function(event) {
        // Check if the link's hash attribute is not empty
        if (this.hash !== "") {
            // Prevent the default link behavior, which would navigate to another page
            event.preventDefault();

            // Store the hash value from the clicked link
            var hash = this.hash;

            // Smoothly scroll to the element with the specified hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                // Update the window location hash to keep the URL in sync
                window.location.hash = hash;
            });
        }
    });
});



// Function to calculate age based on a given birthdate
function calculateAge(birthdate) {
    // Get the current date
    var today = new Date();
    
    // Convert the birthdate to a Date object
    var birthDate = new Date(birthdate);
    
    // Calculate the age by subtracting the birth year from the current year
    var age = today.getFullYear() - birthDate.getFullYear();
    
    // Calculate the difference in months between the current month and birth month
    var monthDiff = today.getMonth() - birthDate.getMonth();

    // Adjust the age if the birth month hasn't occurred yet this year or if the birth date hasn't occurred yet this month
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--; // Subtract 1 from the age
    }

    // Return the calculated age
    return age;
}

// Set the birthdate in the format YYYY-MM-DD
var birthdate = '1998-12-13'; 

// Get references to the HTML elements for displaying age
var ageLabel = document.getElementById('age-label');
var ageElement = document.getElementById('age');

// Function to update and display the age
function updateAge() {
    // Calculate the age based on the provided birthdate
    var age = calculateAge(birthdate);

    // Update the text content of the ageElement to display the calculated age
    ageElement.textContent = age;
}

// Initially update the age when the page loads
updateAge(); // Initial age update



// Initialize slideIndex and slideId arrays for multiple slideshows
// Each element represents the current slide index for a specific slideshow
let slideIndex = [1, 1, 1, 1, 1]; 
// IDs of the HTML elements for each slideshow
let slideId = ["slides-project-1", "slides-project-2", "slides-project-3", "slides-project-5", "slides-project-6"]; 

// Initialize and display the first slide for each slideshow
// Initialize and display the first slide for the first slideshow
showSlides(1, 0); 
// Initialize and display the first slide for the second slideshow
showSlides(1, 1); 
// Initialize and display the first slide for the third slideshow
showSlides(1, 2); 
// Initialize and display the first slide for the fourth slideshow
showSlides(1, 3); 
// Initialize and display the first slide for the fifth slideshow
showSlides(1, 4); 

// Function to move to the next or previous slide for a specific slideshow
function plusSlides(n, no) {
// Update and display the new slide
  showSlides(slideIndex[no] += n, no); 
}

// Function to display a specific slide for a given slideshow
function showSlides(n, no) {
  let i;
  // Get all elements with the specific slideshow ID
  let x = document.getElementsByClassName(slideId[no]); 
  if (n > x.length) {
    // Reset to the first slide if we exceed the number of slides
    slideIndex[no] = 1; 
  }
  if (n < 1) {
    // Reset to the last slide if we go back from the first slide
    slideIndex[no] = x.length; 
  }
  for (i = 0; i < x.length; i++) {
    // Hide all slides
    x[i].style.display = "none"; 
  }
  // Display the current slide
  x[slideIndex[no] - 1].style.display = "block"; 
}

// If you want to add more slideshows in the future, you can do the following:
// 1. Add a new ID to the slideId array, e.g., slideId[2] for the third slideshow.
// 2. Update the showSlides(1, 2) line to initialize and display the first slide for the new slideshow.
// 3. Create corresponding HTML elements with the new ID for the new slideshow.
// 4. Add controls (e.g., previous and next buttons, dots) for the new slideshow and make sure to use the correct onclick function with the updated no parameter.



// Add a DOMContentLoaded event listener to ensure the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all the portfolio images by selecting all <img> elements within elements with class "box"
    const portfolioImages = document.querySelectorAll(".box img");
  
    // Iterate through each portfolio image and its index
    portfolioImages.forEach(function (image, index) {
      // Generate the ID of the corresponding project section using the index
      const projectSection = document.getElementById(`project-${index + 1}`);
  
      // Add a click event listener to the portfolio image
      image.addEventListener("click", function () {
        // Hide all project sections by selecting all elements with class "project"
        const projectSections = document.querySelectorAll(".project");
        projectSections.forEach(function (section) {
          // Set the display style of each project section to "none" to hide them
          section.style.display = "none";
        });
  
        // Show the selected project section by setting its display style to "block"
        projectSection.style.display = "block";
  
        // Scroll to the selected project section with a smooth scrolling behavior
        projectSection.scrollIntoView({ behavior: "smooth" });
      });
    });
});



// Add a click event listener to all elements with the class "btn"
$(".btn").click(function() {
    // Get the data attribute "category" from the clicked element
    const category = $(this).data("category");
    
    // Remove the "active" class from all buttons within the same portfolio section
    $(this).siblings(".btn").removeClass("active");
    
    // Add the "active" class to the clicked button
    $(this).addClass("active");
    
    // Find the closest parent element with the class "portfolio"
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



// Add a click event listener to the element with the ID "project-4-download"
document.getElementById("project-4-download").addEventListener("click", function() {
    // Define the file URL you want to download
    const fileURL = "downloads/ATM Machine.py";
  
    // Create an anchor element
    const anchor = document.createElement("a");
  
    // Set the 'href' attribute of the anchor element to the file URL
    anchor.href = fileURL;
  
    // Set the 'download' attribute to specify the filename when the user downloads the file
    anchor.download = "ATM Machine.py";
  
    // Simulate a click event on the anchor element, triggering the download action
    anchor.click();
});



// Add a click event listener to the element with the ID "cv-download"
document.getElementById("cv-download").addEventListener("click", function() {
    // Define the file URL you want to download
    const fileURL = "downloads/Hamish Getty's CV.pdf";
  
    // Create an anchor element
    const anchor = document.createElement("a");
  
    // Set the 'href' attribute of the anchor element to the file URL
    anchor.href = fileURL;
  
    // Set the 'download' attribute to specify the filename when the user downloads the file
    anchor.download = "Hamish Getty's CV.pdf";
  
    // Simulate a click event on the anchor element, triggering the download action
    anchor.click();
});
