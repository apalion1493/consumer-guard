window.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.swiperAreas', {
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

// window.addEventListener('DOMContentLoaded', () => {
//   const modal = document.getElementById('modal');
//   const openModalBtn = document.getElementById('openModal');
//   const closeModalElements = document.querySelectorAll('.close-modal');
//
//   if (modal && openModalBtn && closeModalElements) {
//     const openModal = () => {
//       modal.classList.remove('hidden');
//     };
//
//     const closeModal = () => {
//       modal.classList.add('hidden');
//     };
//
//     openModalBtn.addEventListener('click', openModal);
//
//     closeModalElements.forEach(el => {
//       el.addEventListener('click', closeModal);
//     });
//
//     window.addEventListener('click', event => {
//       if (event.target === modal) {
//         closeModal();
//       }
//     });
//   } else {
//     // console.error('test')
//   }
// });

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

