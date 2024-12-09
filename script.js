const jobDetails = {
    kfc: `
        <h3>KFC</h3>
        <p><strong>Role:</strong> Team Member</p>
        <p><strong>Duration:</strong> May 2023 - April 2024</p>
        <p>Provided excellent customer service, managed orders, maintained cleanliness, and worked efficiently in a high-paced environment.</p>
    `,
    sainsburys: `
        <h3>Sainsbury's</h3>
        <p><strong>Role:</strong> Online Assistant</p>
        <p><strong>Duration:</strong> July 2023 - March 2024</p>
        <p>Processed online orders, ensured timely deliveries, organized stock, and assisted customers with inquiries both online and in-store.</p>
    `,
    burgerking: `
        <h3>Burger King</h3>
        <p><strong>Role:</strong> Crew Member</p>
        <p><strong>Duration:</strong> April 2024 - Present</p>
        <p>Prepared food orders, handled customer interactions, maintained hygiene standards, and ensured quality service during peak hours.</p>
    `,
    evri: `
        <h3>Evri</h3>
        <p><strong>Role:</strong> Warehouse Operative</p>
        <p><strong>Duration:</strong> March 2023 - May 2023</p>
        <p>Organized packages, sorted deliveries, managed inventory, and ensured smooth logistics operations within tight deadlines.</p>
    `,
    healthcare: `
        <h3>Healthcare Assistant</h3>
        <p><strong>Role:</strong> Healthcare Assistant</p>
        <p><strong>Duration:</strong> March 2022 - January 2023</p>
        <p>Assisted patients with daily activities, monitored health conditions, and provided compassionate care in a healthcare facility.</p>
    `,
    ieee: `
        <h3>IEEE Bolton Chapter</h3>
        <p><strong>Role:</strong> Public Relations Officer</p>
        <p><strong>Duration:</strong> September 2023 - June 2023</p>
        <p>Organized events, managed communications, and promoted IEEE activities within the university community.</p>
    `
};

// Function to show the details descriptions
function showDetails(card, job) {
    const allCards = document.querySelectorAll('.work-card');
    const allDescriptions = document.querySelectorAll('.work-description');

    // Reset all cards and descriptions
    allCards.forEach(c => c.classList.remove('active'));
    allDescriptions.forEach(desc => {
        desc.style.display = 'none';
        desc.style.opacity = '0';
    });

    // Activate the selected card and show its description
    card.classList.add('active');
    const description = card.querySelector('.work-description');
    if (description) {
        description.style.display = 'block';
        // Add a slight delay for the opacity to create a smooth fade-in effect
        setTimeout(() => {
            description.style.opacity = '1';
            description.style.transition = 'opacity 0.3s ease-in-out';
        }, 10);
    }
}


// Hide details when clicking outside the work cards
document.addEventListener('click', function (event) {
    const workCards = document.querySelectorAll('.work-card');
    const isClickInsideCard = Array.from(workCards).some(card => card.contains(event.target));

    if (!isClickInsideCard) {
        workCards.forEach(card => card.classList.remove('active'));
        const allDescriptions = document.querySelectorAll('.work-description');
        allDescriptions.forEach(desc => desc.style.display = 'none');
    }
});

// To animate the progress bar
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.textContent.trim();
        bar.style.width = percentage;
    });
});


// Navigation Links for Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    // Scroll to the top on page load
    window.scrollTo(0, 0);

    // Smooth scrolling when a nav link is clicked
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Highlight the clicked link
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");

            // Ensure all sections are visible when navigating
            sections.forEach(section => {
                section.style.visibility = "visible";
                section.style.opacity = "1";
                section.style.position = "relative";
            });
        });
    });

    // Intersection Observer to update active nav link based on scrolling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.remove("active"));
                const targetLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (targetLink) {
                    targetLink.classList.add("active");
                }
            }
        });
    }, { threshold: 0.3 }); // Adjusted threshold for better detection

    // Observe each section
    sections.forEach(section => observer.observe(section));

});


function toggleDetails(element) {
    // Close all other open project details
    const allItems = document.querySelectorAll('.timeline-item');
    allItems.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
            const details = item.querySelector('.project-details');
            if (details) {
                details.style.display = 'none';
            }
        }
    });

    // Toggle the clicked project's details
    const details = element.querySelector('.project-details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
        element.classList.remove('active');
    } else {
        details.style.display = 'block';
        element.classList.add('active');
    }
}

// Form Submission and Fun Messages with Formspree Integration
// Form Submission and Fun Messages with Real-Time Validation and Formspree Integration

const nameInput = document.getElementById("name");
const responseDiv = document.getElementById("form-response");

// Real-time validation for the name field
nameInput.addEventListener("input", function () {
    const namePattern = /^[a-zA-Z\s]*$/; // Allows only letters and spaces
    const nameValue = nameInput.value;

    if (!namePattern.test(nameValue)) {
        // Remove invalid characters
        nameInput.value = nameValue.replace(/[^a-zA-Z\s]/g, "");
        // Display the error message
        responseDiv.innerHTML = `<p class="error-message">Please enter a valid name (letters and spaces only).</p>`;
    } else {
        // Clear the error message if input is valid
        responseDiv.innerHTML = "";
    }
});

// Form submission event listener
document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message-input").value.trim();

    // Validation Patterns
    const namePattern = /^[a-zA-Z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous response messages
    responseDiv.innerHTML = "";

    // Validate Name
    if (!namePattern.test(name)) {
        responseDiv.innerHTML = `<p class="error-message">Please enter a valid name (letters and spaces only).</p>`;
        return;
    }

    // Validate Email
    if (!emailPattern.test(email)) {
        responseDiv.innerHTML = `<p class="error-message">Please enter a valid email address.</p>`;
        return;
    }

    // Validate Message Length
    if (message.length < 10) {
        responseDiv.innerHTML = `<p class="error-message">Please enter a message with at least 10 characters.</p>`;
        return;
    }

    // Sanitize Message to prevent XSS
    const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Prepare Form Data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", sanitizedMessage);

    try {
        const response = await fetch("https://formspree.io/f/mrbgvplo", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            // Fun response messages
            const responses = [
                `Thanks, <strong>${name}</strong>! I'll get back to you faster than a compiler error! 🚀`,
                `Message received, <strong>${name}</strong>. Time to debug this inbox! 🐞`,
                `Your message has been sent, <strong>${name}</strong>. Coffee's brewing, and I'll reply soon! ☕`
            ];

            // Pick a random response
            const randomIndex = Math.floor(Math.random() * responses.length);
            responseDiv.innerHTML = `<p class="success-message">${responses[randomIndex]}</p>`;

            // Clear the form fields
            form.reset();
        } else {
            responseDiv.innerHTML = `<p class="error-message">Oops! There was a problem sending your message. Please try again.</p>`;
        }
    } catch (error) {
        responseDiv.innerHTML = `<p class="error-message">An error occurred. Please check your connection and try again.</p>`;
    }

    // Clear the response message after 5 seconds
    setTimeout(() => {
        responseDiv.innerHTML = "";
    }, 5000);
});






// Function to switch between tabs in the Contact section
function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-button");

    // Hide all tab contents
    tabContents.forEach(tab => tab.classList.remove("active-tab"));

    // Remove active class from all buttons
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the selected tab and add active class
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.classList.add("active");
}
