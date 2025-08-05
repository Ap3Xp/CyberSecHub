// Matrix Background Effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const binary = '01';
const alphabet = binary;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Responsive Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Blog Data - Moved to the top for better organization
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Penetration Testing",
        date: "June 15, 2023",
        author: "John Doe",
        excerpt: "Learn the fundamentals of penetration testing and how to set up your own lab environment for ethical hacking practice.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tags: ["Penetration Testing", "Kali Linux", "Ethical Hacking"],
        content: `
            <h3>Introduction to Penetration Testing</h3>
            <p>Penetration testing, or pen testing, is the practice of testing a computer system, network or web application to find security vulnerabilities that an attacker could exploit. Penetration testing can be automated with software applications or performed manually.</p>
            
            <h3>Setting Up Your Lab</h3>
            <p>To get started with penetration testing, you'll need to set up a safe environment to practice your skills:</p>
            <ul>
                <li>Install Kali Linux on a virtual machine (VMware or VirtualBox)</li>
                <li>Set up vulnerable practice systems like Metasploitable or DVWA</li>
                <li>Learn basic Linux commands and networking concepts</li>
                <li>Configure your network to isolate your lab environment</li>
            </ul>
            
            <h3>Essential Tools</h3>
            <p>Here are some essential tools every penetration tester should know:</p>
            <ul>
                <li><strong>Nmap</strong> - Network scanning and enumeration</li>
                <li><strong>Metasploit Framework</strong> - Exploitation framework</li>
                <li><strong>Burp Suite</strong> - Web application testing</li>
                <li><strong>Wireshark</strong> - Network protocol analysis</li>
                <li><strong>John the Ripper</strong> - Password cracking</li>
                <li><strong>Hydra</strong> - Online password attacks</li>
            </ul>
            
            <h3>Legal Considerations</h3>
            <p>Always ensure you have proper authorization before testing any system. Unauthorized penetration testing is illegal. Consider these options:</p>
            <ul>
                <li>Set up your own lab with virtual machines</li>
                <li>Use platforms like Hack The Box or TryHackMe</li>
                <li>Get written permission for any external testing</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Securing Your Network: Best Practices",
        date: "May 28, 2023",
        author: "Jane Smith",
        excerpt: "Discover the most effective strategies for securing your network infrastructure against common threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tags: ["Network Security", "Firewalls", "IDS/IPS"],
        content: `
            <h3>Network Security Fundamentals</h3>
            <p>Network security is crucial for protecting sensitive data and maintaining system availability. Key concepts include:</p>
            <ul>
                <li>Confidentiality - Ensuring only authorized users can access data</li>
                <li>Integrity - Maintaining data accuracy and consistency</li>
                <li>Availability - Ensuring systems are accessible when needed</li>
            </ul>
            
            <h3>Essential Security Measures</h3>
            <p>Implement these security measures to protect your network:</p>
            <ul>
                <li><strong>Firewalls</strong>: Configure proper inbound and outbound rules</li>
                <li><strong>Intrusion Detection/Prevention Systems</strong>: Monitor for suspicious activity</li>
                <li><strong>Network Segmentation</strong>: Isolate critical systems</li>
                <li><strong>VPN</strong>: Secure remote access</li>
                <li><strong>Regular Updates</strong>: Patch all systems and software</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Securing Your Network: Best Practices",
        date: "May 28, 2023",
        author: "Jane Smith",
        excerpt: "Discover the most effective strategies for securing your network infrastructure against common threats.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        tags: ["Network Security", "Firewalls", "IDS/IPS"],
        content: `
            <h3>Network Security Fundamentals</h3>
            <p>Network security is crucial for protecting sensitive data and maintaining system availability. Key concepts include:</p>
            <ul>
                <li>Confidentiality - Ensuring only authorized users can access data</li>
                <li>Integrity - Maintaining data accuracy and consistency</li>
                <li>Availability - Ensuring systems are accessible when needed</li>
            </ul>
            
            <h3>Essential Security Measures</h3>
            <p>Implement these security measures to protect your network:</p>
            <ul>
                <li><strong>Firewalls</strong>: Configure proper inbound and outbound rules</li>
                <li><strong>Intrusion Detection/Prevention Systems</strong>: Monitor for suspicious activity</li>
                <li><strong>Network Segmentation</strong>: Isolate critical systems</li>
                <li><strong>VPN</strong>: Secure remote access</li>
                <li><strong>Regular Updates</strong>: Patch all systems and software</li>
            </ul>
        `
    },
    // Add other posts with the same structure...
];

// Display Blog Posts
function displayBlogPosts(posts) {
    const blogContainer = document.getElementById('blog-container');
    
    if (!blogContainer) return;
    
    blogContainer.innerHTML = '';
    
    if (posts.length === 0) {
        blogContainer.innerHTML = '<div class="no-results">No blog posts found matching your search.</div>';
        return;
    }
    
    const postsToShow = window.location.pathname.includes('blogs.html') ? posts : posts.slice(0, 3);
    
    postsToShow.forEach(post => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <h2>${post.title}</h2>
                <div class="blog-meta">
                    <span><i class="far fa-calendar-alt"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div>
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button class="like-button">
                    <i class="far fa-heart"></i> Like
                </button>
                <a href="post.html?id=${post.id}" class="read-more">Read More</a>
            </div>
        `;
        blogContainer.appendChild(blogCard);
    });

    // Add event listeners to like buttons
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.innerHTML = '<i class="fas fa-heart"></i> Liked';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.innerHTML = '<i class="far fa-heart"></i> Like';
            }
        });
    });
}

// Search Functionality
function setupSearch() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    
    if (!searchForm || !searchInput) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            displayBlogPosts(blogPosts);
            return;
        }
        
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        displayBlogPosts(filteredPosts);
    });
    
    // Also filter as user types
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            displayBlogPosts(blogPosts);
            return;
        }
        
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        displayBlogPosts(filteredPosts);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayBlogPosts(blogPosts);
    setupSearch();
    
    // Resize canvas when window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});