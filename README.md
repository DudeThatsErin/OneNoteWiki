# CodingHelp Wiki

A comprehensive wiki for learning programming and software development, created by the CodingHelp community.

🌐 **Live Site:** [https://coding-help.vercel.app](https://coding-help.vercel.app)  
💬 **Discord:** [https://discord.gg/geQEUBm](https://discord.gg/geQEUBm)  
🤝 **Reddit:** [https://reddit.com/r/CodingHelp](https://reddit.com/r/CodingHelp)

## Features

- 🌙 **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🧭 **Intuitive Navigation** - Sidebar navigation with expandable sections
- 📚 **Comprehensive Content** - Covers programming fundamentals to advanced topics
- 🎨 **Modern UI** - Clean, accessible design built with Tailwind CSS
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🔍 **SEO Optimized** - Proper meta tags and structured content

## Tech Stack

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Theme:** Custom light/dark mode implementation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DudeThatsErin/CodingHelp.git
cd CodingHelp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   ├── getting-started/   # Getting started section
│   ├── languages/         # Programming languages guides
│   ├── web-development/   # Web development resources
│   ├── mobile-development/# Mobile development guides
│   ├── data-databases/    # Data and database content
│   ├── devops-tools/      # DevOps and tooling guides
│   ├── resources/         # Learning resources
│   └── faq/              # Frequently asked questions
├── components/            # Reusable React components
│   ├── Header.tsx        # Main navigation header
│   └── Sidebar.tsx       # Sidebar navigation
└── contexts/             # React contexts
    └── ThemeContext.tsx  # Theme management
```

## Content Structure

The wiki is organized into the following main sections:

- **Getting Started** - Programming fundamentals for beginners
- **Programming Languages** - Language-specific guides and tutorials
- **Web Development** - Frontend, backend, and full-stack development
- **Mobile Development** - iOS, Android, and cross-platform development
- **Data & Databases** - Database design, SQL, and data analysis
- **DevOps & Tools** - Development tools, version control, and deployment
- **Resources** - Learning platforms, books, and practice problems
- **FAQ** - Common questions and answers

## Contributing

We welcome contributions from the community! Here's how you can help:

### Content Contributions

1. **Suggest New Topics** - Open an issue to suggest new content areas
2. **Improve Existing Content** - Submit pull requests with improvements
3. **Fix Typos/Errors** - Help us maintain high-quality content
4. **Add Examples** - Contribute code examples and tutorials

### Technical Contributions

1. **Bug Fixes** - Report and fix bugs
2. **Feature Enhancements** - Suggest and implement new features
3. **Performance Improvements** - Help optimize the site
4. **Accessibility** - Improve accessibility features

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Community

Join our vibrant community of developers:

- **Discord Server:** Real-time chat, help, and discussions
- **Reddit Community:** Long-form discussions and Q&A
- **GitHub Issues:** Bug reports and feature requests

## Deployment

This site is automatically deployed to Vercel when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `out` directory contains the static files ready for deployment.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built by the CodingHelp community
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Next.js](https://nextjs.org/)

---

**Happy Coding!** 🚀

If you find this resource helpful, please consider:
- ⭐ Starring the repository
- 💬 Joining our Discord community
- 🤝 Contributing to the project
- 📢 Sharing with other developers
