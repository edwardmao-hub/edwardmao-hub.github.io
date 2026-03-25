// Mobile menu toggle functionality
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Update copyright year
// document.getElementById('current-year').textContent = new Date().getFullYear();</content>
{/* <parameter name="filePath">c:\Users\User-PC\Music\[GIT]\barista website\script.js */}