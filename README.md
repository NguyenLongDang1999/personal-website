# Personal Website - Nuxt 3

This is the source code for a personal website built with [Nuxt 3](https://nuxt.com/) for displaying personal information, blogs, or portfolios.

## 🚀 Technologies Used
- [Nuxt 3](https://nuxt.com/) - Modern Vue framework
- [Vue 3](https://vuejs.org/) - Core framework
- [Vite](https://vitejs.dev/) - Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - Flexible styling
- [Nuxt Content](https://content.nuxt.com/) (optional) - Manage Markdown-based content

## 📦 Installation and Running the Project
### 1. Clone the Repository
```bash
git clone https://github.com/NguyenLongDang1999/personal-website.git
cd personal-website
```

### 2. Install Dependencies
```bash
bun install  # or yarn install
```

### 3. Run Development Server
```bash
bun run dev  # or yarn dev
```
Then, visit `http://localhost:3000` in your browser.

## 📂 Project Structure
```
├── public/         # Static files (favicon, images, etc.)
├── assets/         # CSS, fonts, images
├── components/     # Reusable components
├── layouts/        # Shared layouts
├── pages/          # Main pages (auto-routed by Nuxt)
├── server/         # Backend API (if using Nitro)
├── content/        # Markdown content (if using Nuxt Content)
├── utils/          # Utility functions
├── nuxt.config.ts  # Nuxt configuration
└── package.json    # Dependencies and scripts
```

## 🌍 Deployment
You can deploy the website on various platforms such as:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Private VPS with [PM2](https://pm2.keymetrics.io/)

Example deployment with Vercel:
```bash
npm i -g vercel
vercel
```

## 📜 License
This source code is released under the MIT license. See the [LICENSE](LICENSE) file for details.

---
Thank you for visiting! 🚀 If you have any questions, feel free to contact me via email or open an issue on GitHub.
