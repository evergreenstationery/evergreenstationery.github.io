// JAVASCRIPT LOGIC
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update Nav links styling
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('link-' + pageId).classList.add('active');

    // Close mobile menu
    document.querySelector('.nav-links').classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Form Handling with Formspree
document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show thank you message
            form.innerHTML = '<div style="text-align: center; padding: 2rem;"><h3 style="color: var(--primary-green);">Thank You!</h3><p>Your message has been sent successfully. An Evergreen representative will contact you within 24 hours.</p></div>';
        } else {
            alert('Oops! There was a problem sending your message. Please try again.');
        }
    })
    .catch(error => {
        alert('Oops! There was a problem sending your message. Please try again.');
    });
});