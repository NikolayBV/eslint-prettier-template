# Шаблон проекта с ESLint и Prettier

## 📦 Что включено

- **ESLint** (Flat Config) с правилами для:
  - JavaScript/TypeScript
  - React + React Hooks
  - Prettier интеграция
- **Prettier** для форматирования кода
- **TypeScript** конфигурация

## 🔧 Скрипты

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка проекта
- `npm run lint` - проверка кода
- `npm run lint:fix` - автоматическое исправление ошибок
- `npm run format` - форматирование кода Prettier
- `npm run type-check` - проверка TypeScript

## 📁 Структура

```
├── src/main.js        # Исходный код с тестовым main.js
├── index.html         # Тестовый html
├── public/            # Статические файлы
├── eslint.config.js   # ESLint конфиг
├── .prettierrc        # Prettier конфиг
├── tsconfig.json      # TypeScript конфиг
└── package.json       # Зависимости
└── package-lock.json  # Зависимости
└── .gitigonre         # Gitignore
```

## 🎯 Использование с существующим проектом

Скопируйте файлы конфигурации в ваш проект:

```bash
cp -r eslint.config.js .prettierrc tsconfig.json /путь/к/вашему/проекту/
```

Установите зависимости:

```bash
npm install --save-dev @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks globals prettier typescript
```
