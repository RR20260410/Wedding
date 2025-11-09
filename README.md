# Sarah & John's Wedding Website

A beautiful, responsive wedding website built with React and modern web technologies. This single-page application features a romantic design with a green color scheme and is optimized for both desktop and mobile devices.

## 🌟 Features

### Design & User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Green Color Scheme**: Beautiful green palette with elegant typography
- **Smooth Scrolling**: Seamless navigation between sections
- **Modern UI**: Clean, elegant design with hover effects and animations
- **Accessibility**: Built with accessibility best practices

### Sections
1. **Hero Section**: Stunning landing page with wedding announcement
2. **How We Met**: Interactive timeline of the couple's love story
3. **Wedding Details**: Comprehensive ceremony and reception information
4. **Gallery**: Photo gallery with lightbox functionality
5. **RSVP & Info**: Contact form and additional wedding information
6. **Footer**: Social links and final wedding message

### Technical Features
- **Component-Based Architecture**: Well-structured React components
- **CSS Design System**: Consistent styling with CSS custom properties
- **Form Handling**: Functional RSVP form with validation
- **Image Optimization**: Lazy loading and responsive images
- **Performance**: Optimized for fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wedding-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── HowWeMet.jsx    # Love story timeline
│   ├── Wedding.jsx     # Wedding details
│   ├── Gallery.jsx     # Photo gallery
│   ├── Info.jsx        # RSVP and contact info
│   ├── Footer.jsx      # Footer section
│   └── *.css           # Component-specific styles
├── App.jsx             # Main application component
├── App.css             # App-specific styles
├── index.css           # Global styles and design system
└── main.jsx            # Application entry point
```

## 🎨 Design System

### Colors
- **Primary Green**: `#2d5a27`
- **Secondary Green**: `#4a7c59`
- **Accent Green**: `#6b8e23`
- **Light Green**: `#9dc183`
- **Pale Green**: `#e8f5e8`

### Typography
- **Primary Font**: Playfair Display (serif)
- **Secondary Font**: Inter (sans-serif)

### Spacing
- Consistent spacing scale using CSS custom properties
- Responsive breakpoints for mobile-first design

## 🔧 Customization

### Personalizing the Content

1. **Update Names and Dates**
   - Edit the names "Sarah & John" throughout the components
   - Update the wedding date in `Hero.jsx` and `Footer.jsx`

2. **Modify the Love Story**
   - Update the timeline events in `HowWeMet.jsx`
   - Replace images with your own photos

3. **Wedding Details**
   - Update venue information in `Wedding.jsx`
   - Modify the schedule and dress code

4. **Contact Information**
   - Update contact details in `Info.jsx`
   - Add your social media links in `Footer.jsx`

### Styling Changes

1. **Color Scheme**
   - Modify CSS custom properties in `src/index.css`
   - Update the `:root` variables for colors

2. **Typography**
   - Change fonts in the Google Fonts link in `index.html`
   - Update font variables in `src/index.css`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for different screen sizes
- Collapsible mobile menu
- Proper viewport meta tags

## 🌐 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 📸 Image Credits

The website uses stock images from Unsplash. For production use, replace these with your own photos:
- Hero background: Replace with your engagement photos
- Gallery images: Add your own memories
- Timeline images: Use photos from your relationship milestones

## 🤝 Contributing

This is a personal wedding website, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for Sarah & John's special day**
