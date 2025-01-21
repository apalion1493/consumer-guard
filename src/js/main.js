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

document.addEventListener('DOMContentLoaded', () => {
  const customInput = document.getElementById('custom-input');
  const dateElement = document.getElementById('selected-date');
  const timeElement = document.getElementById('selected-time');
  const clearButton = document.getElementById('clear-button');
  const calendarContainer = document.getElementById('calendar-container');
  const calendarElement = document.getElementById('vanilla-calendar');
  const timeOptions = document.getElementById('time-options');
  const hiddenInput = document.getElementById('hidden-input'); // Скрытый инпут
  const { Calendar } = window.VanillaCalendarPro;

  // Инициализация календаря
  const calendar = new Calendar(calendarElement, {
    selectedTheme: 'light',
    displayDateMin: '2025-01-01',
    displayDateMax: '2025-12-30',
    disableDates: ['2025-01-10:2025-01-13', '2025-01-22'],
    selectedYear: 2025,
    selectedMonth: 0,
    settings: {
      lang: 'en',
      iso8601: true,
      selection: {
        day: 'single',
      },
    },
    onClickDate(self) {
      const selectedDate = self.context.selectedDates[0]; // Получаем выбранную дату (формат YYYY-MM-DD)
      updateDate(selectedDate); // Обновляем дату в кастомном инпуте
      showTimePicker(selectedDate); // Показываем выбор времени
    },
  });

  // Показываем контейнер с календарём при клике на кастомный инпут
  customInput?.addEventListener('click', (event) => {
    if (event.target === clearButton) return;
    calendarContainer.style.display = 'flex';
    calendarContainer.style.top = `50px`;
    calendarContainer.style.left = `0px`;
  });

  // Скрываем контейнер при клике вне его
  document.addEventListener('click', (event) => {
    if (calendarContainer) {
      if (
        !calendarContainer.contains(event.target) &&
        event.target !== customInput &&
        event.target.parentElement !== customInput
      ) {
        calendarContainer.style.display = 'none';
      }
    }
  });

  // Обновляем дату
  function updateDate(date) {
    const [year, month, day] = date.split('-'); // Разбиваем дату
    const formattedDate = `${month}-${day}-${year.slice(-2)}`; // Форматируем дату в MM-DD-YY

    dateElement.textContent = formattedDate; // Устанавливаем дату в кастомном инпуте
    dateElement.classList.remove('placeholder');

    // Обновляем значение скрытого инпута (только дата)
    updateHiddenInput(formattedDate, null);
  }

  // Обновляем время
  function updateTime(time) {
    timeElement.textContent = time;
    timeElement.classList.remove('placeholder');

    // Обновляем значение скрытого инпута (дата + время)
    const currentHiddenValue = hiddenInput.value.split(' ');
    const date = currentHiddenValue[0] || ''; // Берем текущую дату
    updateHiddenInput(date, time);
  }

  // Обновление скрытого инпута
  function updateHiddenInput(date, time) {
    hiddenInput.value = `${date || ''} ${time || ''}`.trim(); // Формат: "MM-DD-YY HH:mm am/pm"
  }

  // Показываем выбор времени
  function showTimePicker(date) {
    generateTimeSlots(date); // Генерируем слоты времени
  }

  // Генерация временных слотов с заголовком
  function generateTimeSlots(date) {
    timeOptions.innerHTML = ''; // Очищаем предыдущие слоты

    // Добавляем заголовок с датой в формате "Day, Month Date"
    const dateHeader = document.createElement('div');
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const formattedHeader = new Date(date).toLocaleDateString('en-US', options); // Прежний формат

    dateHeader.textContent = formattedHeader; // Устанавливаем отформатированную дату
    dateHeader.classList.add('text-center', 'text-body2', 'text-black', 'mb-2', 'p-1');
    timeOptions.appendChild(dateHeader);

    // Генерируем временные слоты
    const times = ['09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm'];

    times.forEach((time) => {
      const timeButton = document.createElement('span');
      timeButton.textContent = time;
      timeButton.classList.add('time-slot', 'cursor-pointer');
      timeButton?.addEventListener('click', () => {
        updateTime(time); // Обновляем время в кастомном инпуте
        calendarContainer.style.display = 'none'; // Скрываем контейнер
      });
      timeOptions.appendChild(timeButton);
    });
  }

  // Очистка данных
  clearButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    dateElement.innerHTML = `${'MM <span class="text-Green">/</span> DD <span class="text-Green">/</span> YY'}`;
    timeElement.textContent = ' 8:00 pm';
    dateElement.classList.add('placeholder');
    timeElement.classList.add('placeholder');
    hiddenInput.value = ''; // Очищаем скрытый инпут
  });

  // Инициализация календаря
  calendar.init();
});

