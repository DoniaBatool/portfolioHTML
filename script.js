const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("read-more-btn").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    var aboutText = document.getElementById("about-text");
    
    // Toggle between expanding and collapsing the content
    if (aboutText.classList.contains("expanded")) {
        aboutText.classList.remove("expanded");
        this.textContent = "Read More"; // Change button text
    } else {
        aboutText.classList.add("expanded");
        this.textContent = "Read Less"; // Change button text
    }
});
