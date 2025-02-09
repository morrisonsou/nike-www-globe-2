// Region data
const regions = {
    northamerica: {
        title: "Sarah - Emergency Room Nurse",
        location: "Toronto, Canada",
        story: "Working 12-hour shifts in the ER requires footwear that can keep up. The WWW shoes provide the comfort and support needed for those critical moments.",
        impact: "Each purchase supports training programs for nurses in developing nations",
        image: "images/profiles/sarah.jpg" // Replace with actual image path
    },
    europe: {
        title: "Elena - Restaurant Owner",
        location: "Barcelona, Spain",
        story: "Managing a busy kitchen and dining room requires footwear that can handle the pace while looking polished for customer interactions.",
        impact: "Supports culinary training programs for women entrepreneurs",
        image: "images/profiles/elena.jpg"
    },
    africa: {
        title: "Amara - School Principal",
        location: "Nairobi, Kenya",
        story: "Moving between classrooms and managing a growing school means being on her feet all day. These shoes transition perfectly from classroom visits to parent meetings.",
        impact: "Local manufacturing initiative provides employment for women in the community",
        image: "images/profiles/amara.jpg"
    },
    asia: {
        title: "Min - Tech Startup Founder",
        location: "Seoul, South Korea",
        story: "From pitch meetings to coding sessions, her WWW shoes keep up with her dynamic schedule while maintaining professional appearance.",
        impact: "Technology training programs for young women are funded through sales",
        image: "images/profiles/min.jpg"
    },
    southamerica: {
        title: "Isabella - Agricultural Engineer",
        location: "Buenos Aires, Argentina",
        story: "Field visits and laboratory work demand versatile footwear. The WWW shoes transition seamlessly between environments.",
        impact: "Sustainable farming initiatives for women farmers receive support",
        image: "images/profiles/isabella.jpg"
    }
};

// DOM elements
const markers = document.querySelectorAll('.marker');
const infoPanel = document.querySelector('.info-panel');

// Function to update info panel content with fade transition
function updateInfoPanel(region) {
    const content = `
        <img class="profile-image" src="${region.image}" alt="${region.title}">
        <h2>${region.title}</h2>
        <p class="location">${region.location}</p>
        <p class="story">${region.story}</p>
        <div class="impact-box">
            <h3>Global Impact</h3>
            <p>${region.impact}</p>
        </div>
    `;

    // Fade out current content
    infoPanel.classList.add('fade');
    
    // After fade out, update content and fade in
    setTimeout(() => {
        infoPanel.innerHTML = content;
        infoPanel.classList.remove('fade');
    }, 300);
}

// Add click event listeners to markers
markers.forEach(marker => {
    marker.addEventListener('click', () => {
        // Remove active class from all markers
        markers.forEach(m => {
            m.classList.remove('active');
            gsap.to(m, {
                scale: 1,
                duration: 0.3
            });
        });
        
        // Add active class to clicked marker
        marker.classList.add('active');
        gsap.to(marker, {
            scale: 1.2,
            duration: 0.3
        });
        
        // Update info panel
        const region = regions[marker.dataset.region];
        updateInfoPanel(region);
    });
});