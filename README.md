# Wandra — Фронтенд сайта по бронированию туров

Фронтенд часть проекта по туризму. Сделан на Vue 3 + Tailwind + Vite.  
Сайт адаптивный, работает на телефоне, есть тёмная тема.

## Что есть на сайте

- Главная с тур-карточками
- Вход / регистрация (модальные окна)
- Профиль пользователя
- Админ-панель (добавление и удаление туров)
- Мобильная версия
- Тёмный стиль

## Стек

- Vue 3
- Vite
- Tailwind CSS
- Pinia (для авторизации)

## Как запустить

```bash
git clone https://github.com/твой-юзернейм/tour-booking-project.git
cd tour-booking-project/frontend
npm install
npm run dev
```

Открыть в браузере по ссылке, которая появилась в консоли [http://localhost:5173](http://localhost:5173)

## Тестовые аккаунты

**Админ**  
Email: `admin@example.com`  
Пароль: `123456`

**Обычный юзер**  
Просто любой email и пароль (не admin)

## Структура

```
frontend/
├── src/
│   ├── components/
│   ├── views/
│   ├── assets/
│   ├── stores/
│   └── App.vue
├── public/
├── index.html
├── package.json
└── ...
```

## Credits

Вдохновление взято отсюда: [Figma от Dsingr](https://www.figma.com/community/file/1346829310706100046/interactive-travel-website-ui-design-tutorial-in-figma-easy-step-by-step-guide)  
По лицензии [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

