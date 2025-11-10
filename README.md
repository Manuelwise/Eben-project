# PalmX Institute Website Clone

A complete clone of the [PalmX Institute website](https://www.palmx.live/) built with Angular and modern UI components, following best practices for modularity and maintainability.
Fuck Ass Project Btw!!
The scroll animation was the hardest part btw.
## 🚀 Technology Stack

- **Framework**: Angular 20+ (standalone components)
- **Package Manager**: pnpm  
- **Styling**: Tailwind CSS 3 with Spartan UI preset
- **UI Library**: Spartan UI (@spartan-ng/brain)
- **Component Library**: Angular CDK
- **Icons**: Lucide Angular (@ng-icons/lucide)
- **State Management**: Angular Signals
- **Type Safety**: TypeScript (strict mode)
- **Build Tool**: Angular CLI
- **CSS Utilities**: class-variance-authority, clsx, tailwind-merge

## 📁 Project Structure

```
src/app/
├── components/
│   ├── layout/
│   │   ├── header/         # Navigation header with responsive menu
│   │   └── footer/         # Footer with newsletter signup
│   └── ui/
│       └── button/         # Reusable button component with variants
├── features/
│   └── home/
│       ├── home-page/             # Main home page container
│       ├── hero-section/          # Hero section
│       ├── three-xs-section/      # The 3 Xs of PXI section
│       ├── core-domains-section/  # Core domains section
│       └── presentations-section/ # PalmX Thursdays section
└── app.routes.ts          # Application routing
```

## 🎯 Features

### Modular Architecture
- **Standalone Components**: All components are standalone, promoting better code splitting and lazy loading
- **Feature-based Organization**: Components are organized by features for better scalability
- **Reusable UI Components**: Shared UI components following consistent design patterns

### Responsive Design
- Mobile-first approach
- Fully responsive across all screen sizes
- Touch-friendly mobile navigation

### Key Sections
1. **Hero Section**: Main introduction to PalmX Institute
2. **3 Xs Section**: Excellence, Exchange, Exploration principles
3. **Core Domains**: Neuroscience, Neurotechnology, Robotics, and AI
4. **Presentations Section**: PalmX Thursdays weekly webinar information
5. **Newsletter Signup**: Email subscription in footer

### UI Components
- **Button Component**: Variant-based button with multiple sizes and styles
  - Variants: default, destructive, outline, secondary, ghost, link
  - Sizes: default, sm, lg, icon
- **Header**: Sticky navigation with mobile menu
- **Footer**: Newsletter signup and social links

## 🛠️ Installation

```bash
# Clone the repository
cd palmx-clone

# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Run tests
pnpm test
```

## 📦 Scripts

- `pnpm start` - Start development server on http://localhost:4200
- `pnpm build` - Build for production
- `pnpm test` - Run unit tests
- `pnpm lint` - Run linting

## 🎨 Styling
-You'll do your own thing apparently smh!!

### Theme Colors
-Don't matter right!!

## 🔧 Best Practices Implemented

### Code Organization
- Separation of concerns (components, features, shared)
- Single Responsibility Principle
- Component composition over inheritance

### Performance
- Lazy loading routes
- OnPush change detection where applicable
- Signals for reactive state management
- Tree-shakeable standalone components
-blah! blah! blah! you dont care!

### Type Safety
- Strict TypeScript configuration
- Proper typing for all component inputs/outputs
- Type-safe routing

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- You dont care!
## 📝 License
All issues to Ebenezer Domey

## 🤝 Contributing

This is a clone project. For the original PalmX Institute, visit [https://www.palmx.live/](https://www.palmx.live/)

## 📧 Contact

For questions about the site contact Ebenezer Domey

---

Built with ❤️ using Angular and Tailwind CSS
