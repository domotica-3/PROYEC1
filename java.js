// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality
    document.querySelector('.navbar-search button').addEventListener('click', function() {
        const query = document.querySelector('.navbar-search input').value;
        if (query) {
            // Implement search functionality here
            alert('You searched for: ' + query);
        }
    });

    // Dropdown Toggle
    document.querySelector('.dropdown').addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'flex';
    });

    document.querySelector('.dropdown').addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none';
    });

    // Responsive Navbar Toggle (add this code to your navbar HTML)
    <button class="navbar-toggle">
        <span>☰</span> </button>
    // JavaScript for Navbar Toggle
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
        document.querySelector('.navbar-menu ul').classList.toggle('active');
    });
});
