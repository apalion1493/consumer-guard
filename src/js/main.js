window.addEventListener('DOMContentLoaded', () => {
  const swiper1 = new Swiper('.swiper-container-categories', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiper2 = new Swiper('.swiper-container-sellers', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  };

  burgerButton?.addEventListener('click', toggleMenu);
});

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalElements = document.querySelectorAll('.close-modal');

  if (modal && openModalBtn && closeModalElements) {
    const openModal = () => {
      modal.classList.remove('hidden');
    };

    const closeModal = () => {
      modal.classList.add('hidden');
    };

    openModalBtn.addEventListener('click', openModal);

    closeModalElements.forEach(el => {
      el.addEventListener('click', closeModal);
    });

    window.addEventListener('click', event => {
      if (event.target === modal) {
        closeModal();
      }
    });
  } else {
    // console.error('test')
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('burger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  burgerButton?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  });
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

document.addEventListener('DOMContentLoaded', function() {
  const wishlistButtonOpen = document.querySelector('#wishlist-open');
  const wishlistBlock = document.querySelector('#wishlist');
  const wishlistCloseBtn = document.querySelector('#wishlist-close');
  const wishlistBg = document.querySelector('#wishlist-bg');

  wishlistButtonOpen?.addEventListener('click', () => {
    wishlistBlock.classList.add('active');
    wishlistBg.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  });

  wishlistCloseBtn?.addEventListener('click', () => {
    wishlistBlock.classList.remove('active');
    wishlistBg.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });

  wishlistBg?.addEventListener('click', () => {
    wishlistBlock.classList.remove('active');
    wishlistBg.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttonSearch = document.querySelector('#search-button');
  const searchContainer = document.querySelector('.searchContainer');

  buttonSearch?.addEventListener('click', (e) => {
    e.stopPropagation(); // Остановить всплытие события, чтобы не сработал обработчик на document
    searchContainer?.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchContainer?.contains(e.target)) { // Если клик не внутри searchContainer
      searchContainer?.classList.remove('active'); // Убрать класс active
    }
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

