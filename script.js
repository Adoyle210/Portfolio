// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.className = savedTheme === 'light' ? 'light-theme' : '';
  
  // Update button text
  updateThemeButtonText();
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Save preference
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    
    // Update navigation theme
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
      navContainer.classList.toggle('light-theme');
    }
    
    updateThemeButtonText();
  });
}

function updateThemeButtonText() {
  const themeToggle = document.getElementById('theme-toggle');
  const isLight = document.body.classList.contains('light-theme');
  themeToggle.textContent = isLight ? '🌙 Dark Mode' : '☀️ Light Mode';
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.nav-container').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Navigation highlight on scroll
function initScrollHighlight() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Typing effect for the main title
function initTypingEffect() {
  const title = document.querySelector('h1');
  if (!title) return;
  
  const text = title.textContent;
  title.textContent = '';
  title.style.borderRight = '2px solid #63a2ff';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      title.style.borderRight = 'none';
    }
  };
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// Parallax effect for header
function initParallaxEffect() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
}

// Tech icon click effects
function initTechIconEffects() {
  const techIcons = document.querySelectorAll('.tech-icons img');
  
  techIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Add click animation
      icon.style.transform = 'scale(0.8) rotate(-5deg)';
      setTimeout(() => {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
      }, 100);
    });
  });
}

// Mobile navigation toggle
function initMobileNav() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileNavToggle.classList.toggle('active');
    });
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSmoothScrolling();
  initScrollAnimations();
  initScrollHighlight();
  initTypingEffect();
  initParallaxEffect();
  initTechIconEffects();
  initMobileNav();
  
  // Add loading class to body for initial animation
  document.body.classList.add('loading');
  
  // Remove loading class after animations complete
  setTimeout(() => {
    document.body.classList.remove('loading');
  }, 1000);
});

// Add scroll progress indicator
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #63a2ff, #4a8eff);
    z-index: 1001;
    transition: width 0.1s ease;
  `;
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Initialize scroll progress when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollProgress);

// Resume download functionality
function initResumeDownload() {
  const resumeBtn = document.getElementById('resume-download');
  
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // For now, show a message that resume is coming soon
      // When you have your generic resume ready, replace this with actual download
      alert('Resume coming soon! I\'m currently updating it for general use. Please check back later or contact me directly.');
      
      // When you're ready to add the actual resume, uncomment and update this:
      // const resumeUrl = 'path/to/your/resume.pdf';
      // const link = document.createElement('a');
      // link.href = resumeUrl;
      // link.download = 'Alexis_Doyle_Resume.pdf';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    });
  }
}

// Initialize resume functionality
document.addEventListener('DOMContentLoaded', initResumeDownload);
