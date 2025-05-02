document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = 'opacity 1s ease-in-out';
      document.body.style.opacity = 1;
    }, 100); // Small delay to ensure transition is applied
  });

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    header.style.transform = 'translateY(-30px)';
    header.style.opacity = 0;
    header.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    setTimeout(() => {
      header.style.transform = 'translateY(0)';
      header.style.opacity = 1;
    }, 300);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.querySelector('.about-us-section .about-image');
    const aboutContent = document.querySelector('.about-us-section .about-content');
  
    if (aboutImage) {
      aboutImage.style.transform = 'translateX(-50px)';
      aboutImage.style.opacity = 0;
      aboutImage.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out 0.2s';
      setTimeout(() => {
        aboutImage.style.transform = 'translateX(0)';
        aboutImage.style.opacity = 1;
      }, 700);
    }
  
    if (aboutContent) {
      aboutContent.style.opacity = 0;
      aboutContent.style.transition = 'opacity 0.6s ease-in-out 0.5s';
      setTimeout(() => {
        aboutContent.style.opacity = 1;
      }, 1000);
    }
  });

  const linkButtons = document.querySelectorAll('.link-buttons-container .link-button');

linkButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'scale(1.1) rotate(2deg)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'scale(1.0)'; // Revert to the CSS hover scale
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.about-page-section .about-image');
    const aboutPageContent = document.querySelector('.about-page-section .about-content');
    const paragraphs = aboutPageContent.querySelectorAll('p');
  
    if (profileImage) {
      profileImage.style.transform = 'translateX(50px)';
      profileImage.style.opacity = 0;
      profileImage.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out 0.2s';
      setTimeout(() => {
        profileImage.style.transform = 'translateX(0)';
        profileImage.style.opacity = 1;
      }, 700);
    }
  
    paragraphs.forEach((p, index) => {
      p.style.opacity = 0;
      setTimeout(() => {
        p.style.transition = 'opacity 0.6s ease-in-out';
        p.style.opacity = 1;
      }, 900 + index * 300); // Staggered fade-in
    });
  });