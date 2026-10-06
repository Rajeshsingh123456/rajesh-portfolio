const menuIcon = document.querySelector('#menu');
const navbar = document.querySelector('nav');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};


const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {

    resumeBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    btn.classList.add('active');

    resumeDetails.forEach(detail => {
      detail.classList.remove('active');
    });

    resumeDetails[idx].classList.add('active');
  });
});


const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');

let imageIndex = 0;

const imagesPerProject = 2;

const activePortfolio = () => {

  // Move image carousel
  imgSlide.style.transform =
    `translateX(calc(${imageIndex * -100}% - ${imageIndex * 2}rem))`;

  // Find current project
  const projectIndex = Math.floor(imageIndex / imagesPerProject);

  // Show correct project details
  portfolioDetails.forEach((detail, i) => {
    detail.classList.toggle('active', i === projectIndex);
  });

  // Disable left arrow at first image
  arrowLeft.classList.toggle(
    'disabled',
    imageIndex === 0
  );

  // Disable right arrow at last image
  arrowRight.classList.toggle(
    'disabled',
    imageIndex === portfolioDetails.length * imagesPerProject - 1
  );
};


// Right arrow
arrowRight.addEventListener('click', () => {

  const totalImages =
    portfolioDetails.length * imagesPerProject;

  if (imageIndex < totalImages - 1) {
    imageIndex++;
    activePortfolio();
  }

});


// Left arrow
arrowLeft.addEventListener('click', () => {

  if (imageIndex > 0) {
    imageIndex--;
    activePortfolio();
  }

});


// Initial portfolio
activePortfolio();


// Highlights section
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