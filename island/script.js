let dropdown = document.getElementById("drop");
let hamburger = document.getElementById("garisTiga");

function toggleHamburger() {
    dropdown.classList.toggle("open"); // Toggle the "open" class directly
}

// Close the dropdown when clicking outside
document.addEventListener("mousedown", (event) => {
    if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
        dropdown.classList.remove("open"); // Close the dropdown if the click is outside
    }
});

document.getElementById("homeFooter").addEventListener("click", function() {
    window.location.href = "../homepage/index.html";
});

document.getElementById("characterFooter").addEventListener("click", function() {
    window.location.href = "../character/index.html";
});

document.getElementById("classFooter").addEventListener("click", function() {
    window.location.href = "../dragonClass/index.html";
});

document.getElementById("islandFooter").addEventListener("click", function() {
    window.location.href = "index.html";
});