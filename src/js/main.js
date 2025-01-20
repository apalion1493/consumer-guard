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

function initMap() {
  // Координаты вашего объекта
  const location = { lat: 40.729509, lng: -73.821321 };

  // Создание карты
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15, // Увеличение
    center: location, // Центр карты
  });

  // Содержимое информационной карточки
  const contentString = `
        <div class="flex gap-x-5 overflow-hidden p-5 lg:p-0 lg:flex-col lg:gap-y-5 lg:gap-x-0">
          <div class="w-[102px] h-[102px] overflow-hidden flex justify-center items-center lg:max-w-[264px] lg:w-full lg:h-auto">
            <img src="img/image-map.png" alt="Мap" class="object-cover w-full lg:hidden">
            <img src="img/image-map-mob.png" alt="Мap" class="object-cover w-full minlg:hidden">
          </div>
          <ul class="flex flex-col gap-y-2 max-w-[236px]">
                <li class="flex items-center">
                  <div class="flex items-center text-body2 text-black">
                    <span class="w-5 h-5 min-w-5 mr-2 flex items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path
                          d="M8 20L7.44506 19.502C6.68002 18.8315 0 12.7922 0 8.37462C0 3.74945 3.58173 0 8 0C12.4183 0 16 3.74945 16 8.37462C16 12.7922 9.31998 18.8315 8.55811 19.5054L8 20ZM8 1.81084C4.53873 1.81494 1.73379 4.75123 1.72987 8.37458C1.72987 11.1498 5.83968 15.5832 8 17.6123C10.1604 15.5823 14.2701 11.1464 14.2701 8.37458C14.2662 4.75123 11.4613 1.81498 8 1.81084Z"
                          fill="#44B64B" />
                        <path
                          d="M8.00009 11.694C6.24873 11.694 4.82896 10.2077 4.82896 8.37433C4.82896 6.54095 6.24873 5.0547 8.00009 5.0547C9.75146 5.0547 11.1712 6.54095 11.1712 8.37433C11.1712 10.2077 9.7515 11.694 8.00009 11.694ZM8.00009 6.71448C7.12441 6.71448 6.41453 7.4576 6.41453 8.37429C6.41453 9.29098 7.12441 10.0341 8.00009 10.0341C8.87578 10.0341 9.58566 9.29098 9.58566 8.37429C9.58566 7.4576 8.87581 6.71448 8.00009 6.71448Z"
                          fill="#44B64B" />
                     </svg>
                    </span>
                    <span>
                       68-29 Main Street, Flushing, NY 11367
                    </span>
                  </div>
                </li>
                <li class="flex items-center">
                  <a class="flex items-center text-body2 text-black hover:text-Green transition-colors"
                     href="tel:+1811111111">
                      <span class="w-5 h-5 min-w-5 mr-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                          <path
                            d="M9.98256 5.18462V2.51796C9.98256 2.34115 10.0528 2.17158 10.1778 2.04655C10.3028 1.92153 10.4724 1.85129 10.6492 1.85129C10.826 1.85129 10.9956 1.92153 11.1206 2.04655C11.2457 2.17158 11.3159 2.34115 11.3159 2.51796V4.25862C11.7359 3.83596 14.4499 1.10796 14.8446 0.713291C14.9061 0.649618 14.9796 0.59883 15.061 0.56389C15.1423 0.528951 15.2298 0.51056 15.3183 0.509791C15.4068 0.509022 15.4946 0.525889 15.5765 0.55941C15.6585 0.592931 15.7329 0.642433 15.7955 0.705028C15.8581 0.767623 15.9076 0.842058 15.9411 0.923988C15.9746 1.00592 15.9915 1.09371 15.9907 1.18223C15.99 1.27074 15.9716 1.35822 15.9366 1.43956C15.9017 1.5209 15.8509 1.59446 15.7872 1.65596C15.3926 2.05062 12.6926 4.76596 12.2752 5.18462H13.9826C14.1594 5.18462 14.3289 5.25486 14.454 5.37989C14.579 5.50491 14.6492 5.67448 14.6492 5.85129C14.6492 6.0281 14.579 6.19767 14.454 6.3227C14.3289 6.44772 14.1594 6.51796 13.9826 6.51796H11.3159C10.9623 6.51796 10.6231 6.37748 10.3731 6.12743C10.123 5.87739 9.98256 5.53825 9.98256 5.18462ZM15.3792 11.6773C15.7656 12.0647 15.9825 12.5895 15.9825 13.1366C15.9825 13.6837 15.7656 14.2085 15.3792 14.596L14.7712 15.296C9.31056 20.5213 -3.97478 7.23996 1.17122 1.76262L1.93789 1.09596C2.32565 0.720321 2.84571 0.51245 3.38556 0.517316C3.9254 0.522182 4.44163 0.739393 4.82256 1.12196C4.84322 1.14196 6.07789 2.74729 6.07789 2.74729C6.44317 3.13299 6.64642 3.64421 6.64567 4.17542C6.64493 4.70664 6.44025 5.21729 6.07389 5.60196L5.30189 6.57262C5.72922 7.61064 6.35739 8.55402 7.15035 9.34857C7.9433 10.1431 8.8854 10.7732 9.92256 11.2026L10.8992 10.426C11.2831 10.0586 11.7938 9.85327 12.3251 9.85253C12.8564 9.85178 13.3676 10.0557 13.7526 10.422C13.7526 10.422 15.3586 11.6573 15.3792 11.6773ZM14.4626 12.6466C14.4626 12.6466 12.8672 11.4186 12.8466 11.3986C12.7092 11.2624 12.5236 11.186 12.3302 11.186C12.1368 11.186 11.9512 11.2624 11.8139 11.3986C11.7959 11.416 10.4512 12.488 10.4512 12.488C10.3606 12.5601 10.2528 12.6074 10.1383 12.6251C10.0239 12.6429 9.90678 12.6305 9.79856 12.5893C8.45417 12.0891 7.23304 11.3057 6.21795 10.2922C5.20286 9.27877 4.41754 8.05888 3.91522 6.71529C3.87069 6.60559 3.85617 6.48602 3.87316 6.36885C3.89015 6.25168 3.93803 6.14115 4.01189 6.04862C4.01189 6.04862 5.08389 4.70596 5.10189 4.68862C5.23807 4.55128 5.31448 4.3657 5.31448 4.17229C5.31448 3.97888 5.23807 3.7933 5.10189 3.65596C5.08189 3.63596 3.85389 2.03929 3.85389 2.03929C3.71449 1.9143 3.53256 1.84735 3.34539 1.85219C3.15822 1.85702 2.97998 1.93327 2.84722 2.06529L2.08056 2.73196C-1.68078 7.25396 9.83389 18.13 13.7959 14.3873L14.4039 13.6866C14.5472 13.5551 14.6336 13.3728 14.6445 13.1785C14.6555 12.9843 14.5902 12.7935 14.4626 12.6466Z"
                            fill="#44B64B" />
                        </svg>
                      </span>
                    <span class="font-medium">811111111</span>
                  </a>
                </li>
                <li class="flex items-center">
                  <a class="flex items-center text-body2 text-black hover:text-Green transition-colors"
                     href="mailto:info@consumerguard.com">
                      <span class="w-5 h-5 min-w-5 mr-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                          <path
                            d="M14.25 0.5H3.75C2.7558 0.501155 1.80267 0.884641 1.09966 1.56634C0.396661 2.24804 0.00119089 3.17229 0 4.13636L0 12.8636C0.00119089 13.8277 0.396661 14.752 1.09966 15.4337C1.80267 16.1154 2.7558 16.4988 3.75 16.5H14.25C15.2442 16.4988 16.1973 16.1154 16.9003 15.4337C17.6033 14.752 17.9988 13.8277 18 12.8636V4.13636C17.9988 3.17229 17.6033 2.24804 16.9003 1.56634C16.1973 0.884641 15.2442 0.501155 14.25 0.5ZM3.75 1.95455H14.25C14.6991 1.9554 15.1376 2.08656 15.5092 2.33113C15.8808 2.5757 16.1684 2.92251 16.335 3.32691L10.5915 8.89709C10.1688 9.30532 9.59656 9.53452 9 9.53452C8.40344 9.53452 7.83118 9.30532 7.4085 8.89709L1.665 3.32691C1.83161 2.92251 2.11921 2.5757 2.49079 2.33113C2.86236 2.08656 3.30091 1.9554 3.75 1.95455ZM14.25 15.0455H3.75C3.15326 15.0455 2.58097 14.8156 2.15901 14.4064C1.73705 13.9972 1.5 13.4423 1.5 12.8636V5.22727L6.348 9.92546C7.05197 10.6064 8.00569 10.9888 9 10.9888C9.99431 10.9888 10.948 10.6064 11.652 9.92546L16.5 5.22727V12.8636C16.5 13.4423 16.2629 13.9972 15.841 14.4064C15.419 14.8156 14.8467 15.0455 14.25 15.0455Z"
                            fill="#44B64B" />
                        </svg>
                      </span>
                    <span class="font-medium">info@consumerguard.com</span>
                  </a>
                </li>
              </ul>
        </div>
      `;

  // Создание информационного окна
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  // Добавление маркера
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Ваш бизнес",
  });

  // Открыть информационное окно по умолчанию
  infowindow.open(map, marker);

  // Открытие информационного окна при клике на маркер
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

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
    if (
      !calendarContainer.contains(event.target) &&
      event.target !== customInput &&
      event.target.parentElement !== customInput
    ) {
      calendarContainer.style.display = 'none';
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
    dateHeader.classList.add('text-center', 'text-body', 'font-semibold', 'text-Blue100', 'mb-2');
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

