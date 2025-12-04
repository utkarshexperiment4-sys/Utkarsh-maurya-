// =================================================================
// 🔴 1. URL MAPPING: यहाँ अपनी वेबसाइटों के लिंक अपडेट करें! 🔴
// =================================================================
const projectUrls = {
    // आपकी प्रोजेक्ट वेबसाइटों के मुख्य URL:
    'UTKForce AI': 'https://utkarshexperiment4-sys.github.io/UTKFORCEAI-', // (आपकी Saved Instruction के अनुसार)
    'Quantum Solver Pro': '#quantum-solver-pro', // यहाँ Quantum Solver Pro का असली लिंक डालें
    'Artificial Earth': 'https://utkarshmauryaai.wixsite.com/artificial-earth-inn', // (आपकी Saved Instruction के अनुसार)
    'MeTube Platform': '#metube-platform', // यहाँ MeTube का असली लिंक डालें
    'UTKForce Store': '#utkforce-store', // यहाँ Store का असली लिंक डालें
    'Visionary Channels': '#visionary-channels', // यहाँ Visionary Channels का असली लिंक डालें

    // नेविगेशन लिंक्स (Home और Contact को पेज पर स्क्रॉल करने के लिए सेट किया गया है)
    'Home': '#',
    'Projects': '#projects-section',
    'AI Tools': '#ai-tools',
    'Contact': '#contact-section',
    'Send Transmission': '#contact-section' // Contact Form Button
};


// =================================================================
// 2. लिंक ओपन करने का मुख्य फंक्शन
// =================================================================
function openLink(key) {
    const url = projectUrls[key];
    if (!url) {
        console.error('Error: URL key not found: ' + key);
        return;
    }

    // अगर लिंक '#' से शुरू होता है, तो स्क्रॉल करें, वरना नया पेज खोलें।
    if (url.startsWith('#')) {
        const targetElement = document.querySelector(url === '#' ? 'body' : url);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // नया टैब खोलें
        window.open(url, '_blank');
    }
}


// =================================================================
// 3. इवेंट लिसनर्स (आइकन को काम कराने के लिए)
// =================================================================

// A. Navigation Bar (नेविगेशन बार के लिंक को काम कराना)
document.querySelectorAll('.neon-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('title');
        openLink(title);
    });
});

// B. Project Cards (प्रोजेक्ट कार्ड को काम कराना)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            openLink(titleElement.textContent.trim());
        }
    });
});

// C. Chatbot Bubble (चैटबॉट आइकन को काम कराना)
document.querySelector('.chatbot-bubble').addEventListener('click', () => {
    // यह UTKForce AI का लिंक खोलेगा (Saved Instruction)
    openLink('UTKForce AI');
});

// D. Contact Form Button (संपर्क फ़ॉर्म बटन को काम कराना)
document.querySelector('.holo-btn').addEventListener('click', (event) => {
    event.preventDefault(); // फ़ॉर्म को सबमिट होने से रोके
    alert('Transmission Initialized! (Functionality needs server-side code)');
    // आप यहाँ अपने असली 'Send Transmission' का फ़ंक्शन जोड़ सकते हैं।
});
