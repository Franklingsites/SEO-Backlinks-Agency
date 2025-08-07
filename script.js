// script.js - Creative Black & White Interactivity

document.addEventListener('DOMContentLoaded', function () {
  // Animate hero shapes
  const circle = document.querySelector('.circle');
  const triangle = document.querySelector('.triangle');
  const square = document.querySelector('.square');
  let t = 0;
  function animateShapes() {
    t += 0.015;
    if(circle) circle.style.transform = `translateY(${Math.sin(t)*20}px)`;
    if(triangle) triangle.style.transform = `rotate(${-10 + Math.sin(t/1.4)*5}deg)`;
    if(square) square.style.transform = `rotate(${12 + Math.cos(t/1.2)*8}deg)`;
    requestAnimationFrame(animateShapes);
  }
  animateShapes();

  // Contact form (demo only)
  const form = document.querySelector('.contact-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank You for Your Interest!\n\nSEO Backlinks Agency is now part of SEOReseller! Head over to SEOReseller to continue buying quality SEO backlinks and access a wide range of powerful link building services – the #1 platform trusted by SEO professionals.');
      form.reset();
    });
  }

  // Fade-in-up animation for service cards
  const serviceCards = document.querySelectorAll('.service-animated-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  serviceCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });

  // Fade-in-up animation for How It Works steps
  const hiwSteps = document.querySelectorAll('.hiw-step');
  const hiwObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        hiwObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  hiwSteps.forEach(step => {
    step.style.animationPlayState = 'paused';
    hiwObserver.observe(step);
  });

  // Fade-in-up animation for Why Choose Us cards
  const wcuCards = document.querySelectorAll('.wcu-card');
  const wcuObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        wcuObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  wcuCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    wcuObserver.observe(card);
  });

  // FAQ Accordion behavior
  const faqItems = document.querySelectorAll('.faq-item');
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      faqItems.forEach((item, i) => {
        if (i === idx) {
          item.classList.toggle('open');
        } else {
          item.classList.remove('open');
        }
      });
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // Scroll to Top Button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  scrollBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  });
});
