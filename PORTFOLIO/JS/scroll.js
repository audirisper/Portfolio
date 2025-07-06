// Get all the links in the navbar
const navLinks = document.querySelectorAll(".menu ul li a");

// Loop through each link and add an event listener
navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Get the href of the clicked link
    const href = link.getAttribute("href");

    // Use the href to scroll to the corresponding section
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});