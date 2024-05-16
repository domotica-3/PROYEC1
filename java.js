// scripts.js

document.querySelector('.navbar-search button').addEventListener('click', function() {
    const query = document.querySelector('.navbar-search input').value;
    if (query) {
        // Implement search functionality here
        alert('You searched for: ' + query);
    }
});

// Toggle dropdown on hover
document.querySelector('.dropdown').addEventListener('mouseover', function() {
    this.querySelector('.dropdown-content').style.display = 'flex';
});

document.querySelector('.dropdown').addEventListener('mouseout', function() {
    this.querySelector('.dropdown-content').style.display = 'none';
});

// Responsive Navbar Toggle
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu ul').classList.toggle('active');
});
