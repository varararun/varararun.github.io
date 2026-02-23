# Angular Resume Portfolio

A modern, responsive resume/portfolio website built with Angular and Nx, featuring a terminal-style interface and smooth animations.

## 🚀 Features

- **Terminal Interface**: Interactive command-line style navigation
- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Automatic theme switching
- **Internationalization**: Multi-language support (English)
- **PWA Ready**: Service worker enabled for offline access
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized build with lazy loading

## 🛠️ Tech Stack

- **Framework**: Angular 17
- **Build Tool**: Nx
- **Styling**: SCSS with custom themes
- **Icons**: Font Awesome
- **Animations**: AOS (Animate On Scroll)
- **Testing**: Jest + Cypress
- **Linting**: ESLint
- **Package Manager**: pnpm

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: Version 20.0.0 or higher (or run `nvm use` in this repo)
- **pnpm**: Version 8.0.0 or higher
- **Nx CLI**: `npm install -g nx`

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:varararun/varararun.github.io.git
   cd varararun.github.io
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Install Nx CLI globally** (if not already installed)
   ```bash
   npm install -g nx
   ```

## 🏃 Development

### Start Development Server

```bash
pnpm start
# or
nx serve
```

The application will open automatically in your browser at `http://localhost:4200/`. The app will automatically reload when you make changes to the source files.

### Available Scripts

- `pnpm start` - Start development server
- `pnpm test` - Run unit tests
- `pnpm run lint` - Run linting
- `pnpm run e2e` - Run end-to-end tests
- `pnpm run build` - Build for production
- `pnpm run deploy` - Build and deploy to GitHub Pages

## 🧪 Testing

### Unit Tests

```bash
pnpm test
# or
nx test
```

### End-to-End Tests

```bash
pnpm run e2e
# or
nx e2e
```

## 🏗️ Building

### Development Build

```bash
nx build
```

### Production Build

```bash
nx build --configuration=production
```

The build artifacts will be stored in the `dist/ng/` directory.

## 🚢 Deployment

### GitHub Pages Deployment

```bash
pnpm run deploy
```

This command will:
1. Build the application for production
2. Copy `index.html` to `404.html` for SPA routing
3. Deploy to GitHub Pages using `gh-pages`

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t ng .
   ```

2. **Run container**
   ```bash
   docker run -p 4200:4200 ng
   ```

3. **Access application**
   Navigate to `http://localhost:4200/`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── general/          # Shared components (footer, menu, loader, etc.)
│   │   └── home/             # Home page components
│   ├── services/             # Angular services
│   └── app.module.ts         # Main app module
├── assets/
│   ├── fonts/                # Custom fonts
│   ├── i18n/                 # Translation files
│   ├── icons/                # Icon assets
│   └── images/               # Image assets
├── environments/             # Environment configurations
└── styles/                   # Global styles and themes
```

## 🌐 Internationalization

The application supports multiple languages. Translation files are located in `src/assets/i18n/`.

Currently supported languages:
- English (en)

## 🎨 Theming

The application includes both dark and light themes that automatically adapt to user preferences. Theme files are located in `src/assets/styles/_themes.scss`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Quality

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **Jest** for unit testing
- **Cypress** for e2e testing

## 📄 License

This project is private and not licensed for public use.

## 🔗 Links

- **Live Site**: [https://avarghese.me](https://avarghese.me)
- **GitHub**: [https://github.com/varararun/varararun.github.io](https://github.com/varararun/varararun.github.io)

## 📚 Older Versions

- [Version 1](https://avarghese.me/version-1)
- [Version 2](https://avarghese.me/version-2)
- [Version 3](https://avarghese.me/version-2)
