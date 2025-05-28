document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
            
            // Set active navigation based on current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            if (currentPage === '' || currentPage === 'index.html') {
                document.getElementById('nav-home').classList.add('active');
            } else if (currentPage === 'about.html') {
                document.getElementById('nav-about').classList.add('active');
            } else if (currentPage === 'staff.html') {
                document.getElementById('nav-staff').classList.add('active');
            } else if (currentPage === 'contact.html') {
                document.getElementById('nav-contact').classList.add('active');
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
            document.querySelector('header').innerHTML = '<div class="container"><p>Error loading header. Please refresh the page.</p></div>';
        });
    
    // Load footer
    fetch('includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            document.querySelector('footer').innerHTML = '<div class="container"><p>Error loading footer. Please refresh the page.</p></div>';
        });
});