// Данные о релизах моделей ChatGPT.
// Каждая запись содержит название модели, дату релиза (ISO‑формат), краткое описание и
// при необходимости дополнительные сведения. Информация собрана из открытых
// источников (Wikipedia, Reuters, TechTarget и др.), на основе которых построен
// таймлайн.

const timelineEvents = [
  {
    name: 'ChatGPT (GPT‑3.5)',
    date: '2022-11-30',
    description: `OpenAI запустила исследовательскую версию ChatGPT на базе модели GPT‑3.5. Это был первый публичный релиз чат‑бота, позволивший пользователям вести диалог с ИИ и оценить возможности больших языковых моделей.`
  },
    // GPT‑4 release
  {
    name: 'GPT‑4',
    date: '2023-03-14',
    description: `На презентации в марте 2023 года OpenAI представила модель GPT‑4. В отличие от GPT‑3.5 она способна работать с текстом и изображениями, показывает гораздо лучшую точность на тестах и стала доступна подписчикам ChatGPT Plus и через API.`
  },
  {
    name: 'GPT‑4 Turbo',
    date: '2023-11-06',
    description: `На конференции DevDay в ноябре 2023 года Сэм Альтман анонсировал GPT‑4 Turbo. Эта версия поддерживает контекст объёмом до 128 тысяч токенов и работает быстрее и дешевле своего предшественника.`
  },
  {
    name: 'GPT‑4o',
    date: '2024-05-13',
    description: `На весеннем мероприятии 2024 года OpenAI представила GPT‑4o (“o” означает “omni”). Модель обрабатывает текст, изображения, аудио и видео, обеспечивает более быстрый отклик и стала доступна всем пользователям (с лимитами) с повышенными лимитами для подписчиков Plus.`
  },
  {
    name: 'GPT‑4o mini',
    date: '2024-07-18',
    description: `В июле 2024 года вышла компактная версия GPT‑4o mini. Она потребляет меньше ресурсов и стала основным бесплатным вариантом ChatGPT, заменив GPT‑3.5 Turbo.`
  },
  {
    name: 'o1‑preview / o1‑mini',
    date: '2024-09-12',
    description: `В сентябре 2024 года OpenAI выпустила предварительную серию моделей o1. В её состав вошли o1‑preview и более экономичная o1‑mini. Эти модели “думают” дольше, чтобы улучшить многозвенную логику и сложное программирование.`
  },
  {
    name: 'o1 & o1‑pro',
    date: '2024-12-05',
    description: `Во время акции “12 дней OpenAI” 5 декабря 2024 года компания обновила o1‑preview до полноценной модели o1 и представила более мощную версию o1‑pro. Модели поддерживают загрузку изображений и расширенные возможности рассуждения.`
  },
  {
    name: 'o3‑mini',
    date: '2025-01-31',
    description: `31 января 2025 года вышла модель o3‑mini, преемница o1‑mini. Она ориентирована на технические задачи, требующие повышенной точности и скорости. Для подписчиков есть вариант o3‑mini‑high с более высоким уровнем рассуждения.`
  },
  {
    name: 'GPT‑4.5 (preview)',
    date: '2025-02-27',
    description: `27 февраля 2025 года OpenAI представила исследовательскую версию GPT‑4.5 (кодовое имя Orion). Модель доступна пользователям ChatGPT Pro и разработчикам. GPT‑4.5 лучше распознаёт шаблоны, генерирует более креативные ответы и меньше “галлюцинирует”; поддерживает загрузку файлов и изображений, но пока не работает с голосом и видео.`
  },
  {
    name: 'GPT‑4.1 (API)',
    date: '2025-04-14',
    description: `14 апреля 2025 года OpenAI выпустила серию GPT‑4.1 (включая варианты mini и nano) в API. Модели получили гигантское окно контекста (до 1 млн токенов), улучшенные механизмы вызова инструментов и повысили управляемость.`
  },
  {
    name: 'o3 & o4‑mini',
    date: '2025-04-16',
    description: `16 апреля 2025 года OpenAI представила полноценную модель o3 и новую модель o4‑mini. Эти “мыслящие” модели интегрируют изображения в свой рассуждательный процесс и могут самостоятельно вызывать инструменты. o4‑mini доступна всем пользователям, а её вариант o4‑mini‑high — только для платных подписчиков.`
  },
  {
    name: 'GPT‑4.1 в ChatGPT',
    date: '2025-05-14',
    description: `С 14 мая 2025 года GPT‑4.1 стала доступна подписчикам ChatGPT Plus и Pro. Одновременно o4‑mini была заменена на GPT‑4.1 mini для всех пользователей.`
  },
  {
    name: 'o3‑pro',
    date: '2025-06-10',
    description: `10 июня 2025 года вышла модель o3‑pro — самая мощная версия серии o3. Она использует больше вычислительных ресурсов, обеспечивает более надёжные ответы и предназначена для сложных задач. Доступна подписчикам Pro и через API.`
  },
  {
    name: 'ChatGPT Agent',
    date: '2025-07-17',
    description: `17 июля 2025 года OpenAI представила режим ChatGPT Agent — специализированную модель для автономного выполнения задач в режиме агента. Новый режим доступен подписчикам Pro, Plus и Team.`
  }
];

// Инициализация таймлайна
document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('events-container');
  const detailsPanel = document.getElementById('details-panel');
  const detailsContent = document.getElementById('details-content');
  const closeBtn = document.getElementById('close-btn');

  // Вычисляем минимальную и максимальную даты для нормализации
  const dates = timelineEvents.map(ev => new Date(ev.date).getTime());
  const minTime = Math.min(...dates);
  const maxTime = Math.max(...dates);
  const timelineWidth = 2000; // ширина линии и контейнера, синхронно со стилями
  const padding = 80; // отступы слева и справа
  const usableWidth = timelineWidth - 2 * padding;

  timelineEvents.forEach((ev, index) => {
    const eventTime = new Date(ev.date).getTime();
    const relativePos = (eventTime - minTime) / (maxTime - minTime);
    const leftPos = padding + relativePos * usableWidth;

    // Создаём элемент события
    const eventEl = document.createElement('div');
    eventEl.className = 'event';
    // Чередуем расположение подписи (сверху/снизу) для лучшей читаемости
    if (index % 2 === 0) {
      eventEl.classList.add('top');
    } else {
      eventEl.classList.add('bottom');
    }
    eventEl.style.left = `${leftPos}px`;

    // Точка на линии
    const dot = document.createElement('div');
    dot.className = 'dot';
    eventEl.appendChild(dot);

    // Название модели
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = ev.name;
    eventEl.appendChild(label);

    // Дата (краткий формат)
    const dateLabel = document.createElement('div');
    dateLabel.className = 'date';
    const dateObj = new Date(ev.date);
    // Форматируем дату в виде ДД.ММ.ГГГГ
    const formatted = dateObj.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
    dateLabel.textContent = formatted;
    eventEl.appendChild(dateLabel);

    // Обработчик клика для отображения подробностей
    eventEl.addEventListener('click', () => {
      showDetails(ev);
    });

    eventsContainer.appendChild(eventEl);
  });

  // Показывает панель с подробной информацией
  function showDetails(eventData) {
    detailsPanel.style.display = 'flex';
    // Очищаем контейнер
    detailsContent.innerHTML = '';
    const title = document.createElement('h3');
    title.textContent = `${eventData.name} — ${new Date(eventData.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' })}`;
    detailsContent.appendChild(title);
    const desc = document.createElement('p');
    desc.textContent = eventData.description;
    detailsContent.appendChild(desc);
  }

  // Закрытие панели по кнопке или при клике вне карточки
  closeBtn.addEventListener('click', () => {
    detailsPanel.style.display = 'none';
  });
  detailsPanel.addEventListener('click', (e) => {
    if (e.target === detailsPanel) {
      detailsPanel.style.display = 'none';
    }
  });
});