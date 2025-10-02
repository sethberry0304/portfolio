# Sethberry Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a red-blue theme, dark mode, and automatic Bilibili video import.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-template/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── works/           # Works listing page
│   │   ├── about/           # About page with language toggle
│   │   ├── contact/         # Contact page
│   │   └── layout.tsx       # Root layout
│   └── components/          # Reusable components
│       ├── NavBar.tsx       # Navigation bar
│       ├── Footer.tsx       # Footer
│       ├── WorkCard.tsx     # Work item card
│       ├── TagFilter.tsx    # Tag filtering component
│       └── Container.tsx    # Layout container
├── data/
│   ├── content.ts           # Site content and configuration
│   └── works.ts             # Works data (manual + imported)
├── scripts/
│   └── import-bilibili.ts   # Bilibili video import script
└── public/
    ├── images/              # Static images
    └── files/               # Resume and other files
```

## 🎨 Customization

### Content Management

Edit `data/content.ts` to update:
- Personal information (name, tagline, about)
- Social media links
- Theme colors
- Bilibili import settings

### Adding Works

1. **Manual works:** Edit `data/works.ts` and add to `works_manual` array
2. **Bilibili videos:** Run the import script (see below)

### Theme Customization

Modify `tailwind.config.ts` to change:
- Brand colors (`brand_red`, `brand_blue`)
- Background colors
- Custom shadows and effects

## 📺 Bilibili Integration

The portfolio includes two ways to display your Bilibili videos:

### 1. RSS Feed Integration (Recommended)

The `/videos` page automatically fetches and displays your latest Bilibili videos using RSS:

- **RSS Source:** `https://rsshub.app/bilibili/user/video/398797485`
- **Auto-updates:** Videos are fetched server-side with 1-hour caching
- **Filtering:** Only shows videos from 2023-01-01 onwards
- **Responsive:** Mobile 1-column, tablet 2-column, desktop 3-column grid
- **Error handling:** Graceful fallback with link to your Bilibili channel

### 2. Script Import (Alternative)

For static generation or when RSS is unavailable:

1. **Enable import** in `data/content.ts`:
   ```typescript
   export const bilibili_import = {
     enable: true,
     uid: "398797485",        // Your Bilibili UID
     since: "2023-01-01",     // Import videos from this date
     max_items: 60            // Maximum number of videos
   };
   ```

2. **Run the import:**
   ```bash
   npm run import:bili
   ```

### How RSS Integration Works

- Server-side fetching using `fetchBilibiliVideos()` function
- XML parsing to extract video metadata
- Date filtering and sorting (newest first)
- Cover image fallback to placeholder
- Error handling with user-friendly messages

### Video Display Features

- **Video Cards:** Cover image, title, publication date
- **Hover Effects:** Red-blue glow matching site theme
- **Clickable:** Direct links to Bilibili videos (new window)
- **Responsive:** Optimized for all screen sizes
- **Accessibility:** Proper alt text and ARIA labels

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Deploy with default settings

3. **Environment Variables (if needed):**
   - Add any required environment variables in Vercel dashboard
   - Redeploy if needed

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run import:bili` - Import Bilibili videos

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/NavBar.tsx`

### Adding New Components

1. Create component in `src/components/`
2. Export from component file
3. Import where needed

## 🎯 Features

- **Responsive Design:** Mobile-first approach with TailwindCSS
- **Dark Theme:** Built-in dark mode with red-blue accent colors
- **Performance:** Optimized images with Next.js Image component
- **SEO:** Meta tags and structured data
- **Accessibility:** ARIA labels and keyboard navigation
- **TypeScript:** Full type safety
- **Modern UI:** Glassmorphism effects and smooth animations

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading:**
   - Check `next.config.js` for correct image domains
   - Verify image URLs are accessible
   - Use `unoptimized` prop for problematic images

2. **Bilibili import fails:**
   - Check your Bilibili UID is correct
   - Verify RSSHub is accessible
   - Check network connectivity

3. **Build errors:**
   - Run `npm run lint` to check for issues
   - Ensure all imports are correct
   - Check TypeScript errors

### Performance Tips

- Use Next.js Image component for all images
- Optimize image sizes before uploading
- Enable gzip compression on your server
- Use a CDN for static assets

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:
- Check the troubleshooting section above
- Open an issue on GitHub
- Contact: sethberryonline@outlook.com

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading:**
   - Check `next.config.js` for correct image domains
   - Verify image URLs are accessible
   - Use `unoptimized` prop for problematic images

2. **Bilibili import fails:**
   - Check your Bilibili UID is correct
   - Verify RSSHub is accessible
   - Check network connectivity

3. **Build errors:**
   - Run `npm run lint` to check for issues
   - Ensure all imports are correct
   - Check TypeScript errors

4. **Videos not loading:**
   - RSS feed may be temporarily unavailable
   - Check network connectivity to RSSHub
   - Fallback to script import method if needed

### Performance Tips

- Use Next.js Image component for all images
- Optimize image sizes before uploading
- Enable gzip compression on your server
- Use a CDN for static assets

### Video Integration Notes

- **RSS Method:** Real-time updates, requires network access
- **Script Method:** Static generation, works offline
- **Fallback:** If RSS fails, users see friendly error with Bilibili link
- **Caching:** RSS results cached for 1 hour to improve performance

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS