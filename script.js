// Search functionality
document.getElementById('searchInput')?.addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const name = product.getAttribute('data-name') || '';
    if (name.toLowerCase().includes(filter)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});

particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 900 } },
    color: { value: "#f4f4f4" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2.5,
      random: true,
      anim: { enable: true, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#f4f4f4",
      opacity: 3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 }
    }
  },
  retina_detect: true
});
document.getElementById('priceSelect').addEventListener('change', function () {
  const selectedPrice = parseInt(this.value);
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const price = parseInt(product.getAttribute('data-price'));

    if (isNaN(selectedPrice) || selectedPrice === 0 || this.value === 'all') {
      product.style.display = 'block';
    } else {
      product.style.display = price <= selectedPrice ? 'block' : 'none';
    }
  });
});

const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  let current = 0;
const images = document.querySelectorAll('.hero-image');

function changeImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

setInterval(changeImage, 4000); // Change every 4 seconds

