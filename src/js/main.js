window.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.areas-list', {
    // Optional parameters
    slidesPerView: '3',
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: false,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 'auto',
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.attorneyList1', {
// Optional parameters
    slidesPerView: '3',
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
    },
    scrollbar: false,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 'auto',
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const burgerLines = document.querySelectorAll('.burger-line');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('overflow-hidden');
    burgerLines.forEach((line) => {
      line.classList.toggle('open');
    });
  };

  burgerButton?.addEventListener('click', toggleMenu);
});

document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', () => {
    const submenu = button.nextElementSibling;

    // Переключаем видимость подменю
    button.classList.toggle('open-menu');
    submenu.classList.toggle('hidden');

    // Закрываем другие подменю, если они открыты
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.classList.add('hidden');
      }
    });
  });
});

window.addEventListener('scroll', function() {
  const component = document.getElementById('sticky-header');
  const componentHeight = component.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= componentHeight) {
    component.classList.add('sticky-header-active');
  } else {
    component.classList.remove('sticky-header-active');
  }
});

