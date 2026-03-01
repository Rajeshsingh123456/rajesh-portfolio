
const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('nav');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    btn.classList.add('active');

    // Hide all resume detail sections
    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });

    // Show the corresponding resume detail
    resumeDetails[idx].classList.add('active');
  });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
  const portfolioDetails = document.querySelectorAll('.portfolio-detail');

  // Slide the images
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // Show the correct text
  portfolioDetails.forEach((detail, i) => {
    detail.classList.toggle('active', i === index);
  });

  // Disable buttons at ends
  arrowLeft.classList.toggle('disabled', index === 0);
  arrowRight.classList.toggle('disabled', index === portfolioDetails.length - 1);
};

// Event: Right arrow
arrowRight.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.portfolio-detail').length;
  if (index < totalItems - 1) {
    index++;
    activePortfolio();
  }
});

// Event: Left arrow
arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});

// Initial call to show first item
activePortfolio();
 

// for higlights section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});