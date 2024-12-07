const jobDetails = {
    kfc: `
        <h3>KFC</h3>
        <p><strong>Role:</strong> Team Member</p>
        <p><strong>Duration:</strong> May 2023 - June 2024</p>
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
    `
};

// Function to show job details
function showDetails(card) {
    const allCards = document.querySelectorAll('.work-card');
    const allDescriptions = document.querySelectorAll('.work-description');

    // Reset all cards and descriptions
    allCards.forEach(c => c.classList.remove('active'));
    allDescriptions.forEach(desc => desc.style.display = 'none');

    // Activate the selected card and show its description
    card.classList.add('active');
    const description = card.querySelector('.work-description');
    description.style.display = 'block';
}

// Navigation Links for Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".section-content");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            // Hide all sections
            sections.forEach(section => {
                section.style.visibility = "hidden";
                section.style.opacity = "0";
                section.style.position = "absolute";
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            targetSection.style.visibility = "visible";
            targetSection.style.opacity = "1";
            targetSection.style.position = "relative";

            // Scroll to the target section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Highlight the active link
            links.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Intersection Observer for Active Navigation Link
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.remove("active"));
                document.querySelector(`.nav-links a[href="#${entry.target.id}"]`).classList.add("active");
            }
        });
    }, { threshold: 0.5 });

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
