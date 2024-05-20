// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    let isValid = true;

    // Name validation
    const nameField = document.getElementById('name');
    if (nameField.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    // Email validation
    const emailField = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Message validation
    const messageField = document.getElementById('message');
    if (messageField.value.trim() === '') {
        alert('Please enter a message.');
        isValid = false;
    }

    // If form is valid, you can send the form data to the server or process it further here
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add your form submission logic, e.g., sending the data via AJAX
        // For this example, we'll just reset the form
        this.reset();
    }
});

console.log("Hello, welcome to my CV website!");
