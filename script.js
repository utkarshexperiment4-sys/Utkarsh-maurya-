// =================================================================
// 🔴 1. URL MAPPING: यह कोड अपडेट हो गया है! 🔴
// =================================================================
const projectUrls = {
    // ----------------------------------------------------
    // A. PROJECTS GRID LINKS (प्रोजेक्ट कार्ड्स)
    // ----------------------------------------------------
    'UTKForce AI': 'https://www.utkforceservices.gt.tc/', // (UTKForce AI/Chatbot का नया URL)
    'Quantum Solver Pro': 'http://www.quantumsolverpro.page.gd/', // (Quantum Solver Pro का नया URL)
    'MeTube Platform': 'https://www.chitrapat.gt.tc/', 
    'UTKForce Store': '[APNA ASLI URL YAHAN DALEN]', 
    'Artificial Earth': 'https://utkarshmauryaai.wixsite.com/artificial-earth-inn', // (यह पुराना URL सेव है)
    'Visionary Channels': '[APNA ASLI URL YAHAN DALEN]', 

    // ----------------------------------------------------
    // B. NAVIGATION BAR ICONS (नेविगेशन बार के आइकन्स)
    // ----------------------------------------------------
    'Home': '#',
    'Projects': '#projects-section',
    'AI Tools': 'https://www.utkforceservices.gt.tc/', // (Navigation bar AI icon का URL)
    'Contact': '#contact-section',
    
    // ----------------------------------------------------
    // C. WIDGETS AND BUTTONS
    // ----------------------------------------------------
    'Send Transmission': '#contact-section' 
};


// =================================================================
// 2. लिंक ओपन करने का मुख्य फंक्शन (इसे बदलने की ज़रूरत नहीं है)
// =================================================================
function openLink(key) {
    const url = projectUrls[key];
    if (!url) {
        console.error('Error: URL key not found: ' + key);
        return;
    }

    if (url.startsWith('#')) {
        const targetElement = document.querySelector(url === '#' ? 'body' : url);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        window.open(url, '_blank');
    }
}


// =================================================================
// 3. इवेंट लिसनर्स (आइकन को काम कराने के लिए) (इसे बदलने की ज़रूरत नहीं है)
// =================================================================

// A. Navigation Bar 
document.querySelectorAll('.neon-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('title');
        openLink(title);
    });
});

// B. Project Cards 
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            openLink(titleElement.textContent.trim());
        }
    });
});

// C. Chatbot Bubble 
document.querySelector('.chatbot-bubble').addEventListener('click', () => {
    openLink('UTKForce AI');
});

// D. Contact Form Button 
document.querySelector('.holo-btn').addEventListener('click', (event) => {
    event.preventDefault(); 
    openLink('Send Transmission');
});
