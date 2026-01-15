# Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and fully tested with **Vitest**. Features a beautiful sidebar navigation, multiple content sections, and is ready for GitHub Pages deployment.

## ✨ Features

- **React 19 + TypeScript** - Modern React with full type safety
- **Vite** - Lightning-fast build tool and dev server
- **Responsive Design** - Mobile-first, works on all devices
- **Component-Based** - Modular, reusable components with corresponding CSS files
- **Comprehensive Testing** - 56+ unit tests with Vitest and React Testing Library
- **GitHub Pages Ready** - Pre-configured for easy deployment
- **Modern Styling** - CSS custom properties for theming and easy customization
- **Accessibility** - Semantic HTML and proper ARIA labels

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Testing
```bash
npm test
```

### Build
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📋 Requirements

Before deploying, update the `homepage` field in `package.json`:
```json
"homepage": "https://<your-username>.github.io/portfolio_website"
```

For detailed setup instructions, see [GITHUB_PAGES_SETUP.md](GITHUB_PAGES_SETUP.md)

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Home, About, Projects, Skills, Contact)
│   ├── App.tsx            # Main component
│   ├── Sidebar.tsx        # Sidebar navigation
│   ├── MainContent.tsx    # Main content area
│   ├── Button.tsx         # Reusable button
│   ├── Card.tsx           # Reusable card
│   ├── ProjectCard.tsx    # Project card
│   ├── SkillBar.tsx       # Skill progress bar
│   └── *.css              # Component styles
├── types/
│   └── index.ts           # Type definitions
├── test/
│   └── setup.ts           # Test configuration
└── main.tsx               # Entry point
```

## 🧪 Testing

All components are fully tested:
- **56 tests** covering all functionality
- **100% component coverage** with Vitest
- **React Testing Library** for user-centric tests

Run tests:
```bash
npm test
```

View test UI:
```bash
npm run test:ui
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #0a84ff;
  --accent-light: #34c759;
  --text-primary: #1d1d1d;
  /* ... more variables ... */
}
```

### Add New Sections
1. Create component in `src/components/sections/`
2. Add corresponding CSS file
3. Update type definitions in `src/types/index.ts`
4. Register in `NavigationMenu.tsx` and `MainContent.tsx`

## 📊 Performance

- Production bundle: ~64KB gzipped
- Fast dev server with HMR
- Optimized for Lighthouse scores
- Mobile-friendly and responsive

## 🔗 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run tests in watch mode |
| `npm run test:ui` | Run tests with UI |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

## 🛠 Tech Stack

- **React 19.2** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.3** - Build tool
- **Vitest 4** - Unit testing
- **React Testing Library 16** - Testing utilities
- **ESLint 9** - Code quality

## 📖 Documentation

- [GitHub Pages Setup Guide](GITHUB_PAGES_SETUP.md)
- [Vite Documentation](https://vite.dev)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## 📄 License

MIT License - Feel free to use this project for your own portfolio!

## 💡 Tips

- Customize the profile information in `ProfileHeader.tsx`
- Update project data in `Projects.tsx`
- Modify skills in `Skills.tsx`
- Add social links in `SocialLinks.tsx`
- Replace placeholder images with your own

---

**Built with ❤️ using React + TypeScript + Vite**