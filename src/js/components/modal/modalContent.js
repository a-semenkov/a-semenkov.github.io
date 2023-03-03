export const MODAL_CONTENT = [
  {
    name: "landing",
    header: "Лендинги под ключ",
    body: {
      scope: [
        "Работа на фрилансе и напрямую с заказчиком",
        'Верстка "под ключ"',
        "Управление проектом",
        "Координация с дизайнерами, SEO, копирайтерами, поиск и наем профильных специалистов",
        "Подготовка комммерческих предложений, поиск и утверждение технических решений",
        "Разработка backend и frontend-части для форм расчета цен, контактов, компонентов",
        "Deploy: загрузка на сервер, оптимизация и настройка",
        "Работа с VPS хостингом, cloud-платформами, онлайн-кассами",
        "Разработка документации и руководств к API и коду",
      ],
      picture: "landing",
      technology: [
        "Figma, Illustrator, photoshop",
        "Подготовка и оптимизация изображений, видео, шрифтов",
        "HTML + CSS(SCSS) + JS",
        "Адаптивная, кроссбраузерная, семантическая и доступная верстка",
        "Работа как с чистым Javascript, так и с фреймворками: React, NodeJS",
        "Сборщики: gulp, webpack, parcel",
        "Шаблонизаторы pug, handlebars, nunjucks, mustache, и т.д.",
        "Создание собственных JS компонентов (модальные окна, формы, калькуляторы), использование готовых библиотек NPM",
      ],
    },
    footer: {
      link: "http://bskservice.ru/",
      description: "",
    },
  },
  {
    name: "crm",
    header: "CRM-система для управления продажами",
    body: {
      scope: [
        "Изначально приложение написано на чистом Javascript в качестве pet-проекта, в дальнейшем переписано на React + Redux + NodeJS + MySQL и внедрено в компании, в которой я работал ",
        "Прототипирование, дизайн, разработка с учетом реальных задач компании",
        "Управление проектом с нуля до полноценной интеграции в компанию",
        "Поддержка, исправление ошибок, написание документации",
        "Добавление новых функций с учетом требований отдела продаж",
        "Тестирование",
      ],
      picture: "crm",
      technology: [
        "Typescript",
        "Фреймворк: React",
        "State-manager: Redux (RTK + RTK Query)",
        "Backend: NodeJS (Express)",
        "База данных: MySQL",
        "Разработка: Vite",
        "Тестирование: Jest + Cypress",
        "Управление проектом: GIT, JIRA",
        "Документация: Notion",
      ],
    },
    footer: {
      link: "https://crm-clients-six.vercel.app/",
      description:
        "Внимание! Приложение загржено на бесплатный хостинг для демонстрации, поэтому при первом запуске время загрузки сервера может составлять до 1 мин",
    },
  },
  {
    name: "rememberMe",
    header: "веб-приложение: фотоальбом-дневник с функцией контроля привычек",
    body: {
      scope: [
        "Fullstack веб-приложение-дневник для сохранения каждого дня и для контроля за формированием привычек",
        "Приложение написано полностью с нуля: от идеи до рабочей MVP",
        "Frontend + backend с учетиом требований по нагрузке",
        "Прототип + дизайн",
        "100% интеграция с Google Firebase и Firestore",
        "В данный момент рабочая MVP версия дорабатывается до стабильного релиза",
        "После релиза, приложение будет портировано на мобильные устройства на React Native + REST API",
      ],
      picture: "rememberMe",
      technology: [
        "Typescript",
        "Фреймворк: React",
        "Анимации: Framer Motion",
        "State-manager: Redux (RTK + RTK Query)",
        "Backend: в версии для разработки: Google Firebase, в production - REST API NodeJS + Express",
        "База данных: Google Firebase / MySQL",
        "Дизайн: Figma",
        "Разработка: Vite",
        "Тестирование: Jest",
        "Управление проектом: GIT",
      ],
    },
    footer: {
      link: "https://remember-me-delta.vercel.app/",
      description: "",
    },
  },
  {
    name: "components",
    header:
      "разработка отдельных компонентов для приложений, лендингов и сайтов, например, форма оплаты",
    body: {
      scope: [
        "Помощь заказчику с подготовкой, корректировкой и утверждением ТЗ",
        "Разработка компонента с учетом требований заказчика",
        "Frontend + backend, поиск оптимальных решений",
        'Создание "умных" и универсальных компонентов',
        "Интеграция со стилями заказчика",
        "Поиск и внедрение готовых решений",
        "Консультации",
      ],
      picture: "card",
      technology: [
        "Typescript при использовании с React",
        "HTML + CSS + Javascript + транспиляция для совместимости со старыми браузерами",
        "Использование внешних библиотек при необходимости: Bootstrap, ChakraUI, MaterialUI, Storybook",
        "CSS-in-JS: StyledComponents, Tailwind",
        "Разработка: Vite, webpack, CRA",
        "Тестирование: Jest",
        "Управление проектом: GIT",
      ],
    },
    footer: {
      link: "https://credit-card-payment-form-a-semenkov.vercel.app/",
      description:
        "Внимание! Сайт может отмечаться google chrome как небезопасный, поскольку это форма для ввода данных кредитных карт. Приложение работает на хостинге Vercel по https, никакая введенная информация не сохраняется. Чтобы перейти на сайт, нажмите сведения -> перейти на страницу.",
    },
  },
  {
    name: "banking",
    header:
      "разработка отдельных компонентов для приложений, лендингов и сайтов, например, форма оплаты",
    body: {
      scope: [
        "Pet-проект на чистом Javascript, написанный по архитектуре MVC",
        "Минимальное использование сторонних библиотек, для работы с native API ",
        "Разделение модели и представления по паттерну MVC, следование ООП парадигмам и принципам SOLID",
        "Компонентный подход, максимальная переиспользуемость компонентов",
      ],
      picture: "bank",
      technology: [
        "Typescript при использовании с React",
        "HTML + CSS + Javascript + транспиляция для совместимости со старыми браузерами",
        "Максимальное использование нативных API браузера: WAAPI, Observer API, Proxy, websockets, history API, etc.",
        "Разработка: webpack",
        "Управление проектом: GIT",
        "Deploy: Vercel, Render (для серверной части на NodeJS)",
      ],
    },
    footer: {
      link: "https://gitfront.io/r/user-9480253/jnatdJF8RmQq/banking-exchange-app/",
      description:
        "По ссылке доступен код на GitHub. Ссылка на рабочий проект предоставляется по требованию, из-за сложности с работой серверной части на бесплатных хостингах",
    },
  },
];

export function createModalContent(project) {
  const header = project.header;
  const body = `
  <div class='modal__scope'>
    <h3>Объем работ</h3>
    <ul class="modal__list">
    ${project.body.scope.map((el) => `<li class="item">${el}</li>`).join("")}
    </ul>
  </div>
  <video class="modal__video" autoplay loop controls width="250">

    <source src="video/${project.body.picture}.mp4" type="video/mp4">
    Ваш браузер не поддерживает встроенные видео :(
  </video>

    <div class='modal__scope'>
    <h3>Стэк технологий</h3>
    <ul class="modal__list">
    ${project.body.technology
      .map((el) => `<li class="item">${el}</li>`)
      .join("")}
    </ul>
    </div>
  `;

  const footer = `<a href="${project.footer.link}" target="_blank">Ссылка на рабочий проект</a>
  <p>${project.footer.description}</p>`;

  return { header, body, footer };
}
