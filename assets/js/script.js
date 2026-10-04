document.addEventListener('DOMContentLoaded', () => {
    // 01 # Header
    // Elements
    const header = document.getElementById('za-header');
    const navbar = document.getElementById('za-navbar');
    const menuToggle = document.getElementById('za-menu-toggle');
    const sidebar = document.getElementById('za-sidebar');
    const sidebarOverlay = document.getElementById('za-sidebar-overlay');
    const sidebarClose = document.getElementById('za-sidebar-close');
    const sidebarBody = document.getElementById('za-sidebar-body');

    // 1. Sticky Header Shadow on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('za-scrolled');
        } else {
            header.classList.remove('za-scrolled');
        }
    });

    // 2. Clone Desktop Menu to Mobile Sidebar
    if (navbar && sidebarBody) {
        const navClone = navbar.querySelector('.za-nav-list').cloneNode(true);
        sidebarBody.appendChild(navClone);
    }

    // 3. Sidebar Open / Close Logic
    const openSidebar = () => {
        sidebar.classList.add('za-active');
        sidebarOverlay.classList.add('za-active');
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        sidebar.classList.remove('za-active');
        sidebarOverlay.classList.remove('za-active');
        document.body.style.overflow = '';
    };

    if (menuToggle) menuToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // 02 # Services
    // Initialize Swiper for Services Section
    const servicesSwiper = new Swiper('.za-services-slider', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#za-services-next',
            prevEl: '#za-services-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
    // 03 # Menu
    const menuGrid = document.querySelector('.za-menu-grid');

  if (menuGrid && typeof Isotope !== 'undefined') {
    // Initialize Isotope Filter Grid
    const iso = new Isotope(menuGrid, {
      itemSelector: '.za-menu-item-col',
      layoutMode: 'fitRows',
      transitionDuration: '0.4s'
    });

    // Filter Buttons Interaction
    const filterButtons = document.querySelectorAll('.za-filter-btn');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('za-active'));
        
        // Add active class to clicked button
        this.classList.add('za-active');

        // Filter items
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });
  }

  // 04 # Testimonials
  // Initialize Swiper for Testimonials Section
  const testimonialsSwiper = new Swiper('.za-testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '#za-testimonials-next',
      prevEl: '#za-testimonials-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
});