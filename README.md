## Sales Landing Page Project

This project is a fully responsive sales landing page built with HTML, CSS, and JavaScript. The page is designed for performance, usability, and an optimal user experience across desktop and mobile devices. It includes dynamic features such as alerts, responsive images, lazy loading, and optimized styles for faster loading.

## Features

- Responsive Design: Works seamlessly on all screen sizes, with mobile-first optimization.

- Optimized Images: Uses <picture> element to serve different images for desktop and mobile, reducing download size.

- Lazy Loading: All non-critical images are lazy-loaded to improve page speed.

- High Performance: CSS and JS are minified; Tailwind CSS has been removed or self-hosted for faster load.

- Stock Alert Component: A dynamic, animated section showing limited stock with pulse effect.

- SEO and Accessibility: Proper use of semantic HTML, alt attributes for images, and accessible color contrasts.

- Cross-Browser Compatibility: Tested on modern browsers (Chrome, Firefox, Edge, Safari).

/assets
/css - style.min.css # Minified CSS for performance
/images - desktop/ # Images for desktop - mobile/ # Images for mobile
/index.html # Main landing page
/script.js # Custom JavaScript (animations, stock counter, etc.)

## Optimizations Implemented

1. CSS and JS Minification – Reduced file sizes for faster load.

2. Lazy Loading Images – Only loads images when they appear in the viewport.

3. Responsive Images – <picture> and srcset used to avoid unnecessary downloads.

4. Self-Hosted Tailwind – Removed external CDN to prevent render-blocking and reduce LCP delays.

5. Critical CSS & Preload – Preloading key assets like hero images for faster initial rendering.

6. Deferring Non-Critical JS – Scripts set with defer to prevent blocking the DOM.

7. Semantic HTML – Proper use of <section>, <header>, <main>, <footer>.

8. Accessibility Improvements – Alt text, ARIA roles, and readable fonts.

## Demo

You can preview the page locally or deploy it to any static hosting platform like Netlify, Vercel, or GitHub Pages.

## 👨‍💻Author

Project developed by Josias Alves Pereira Caurio
📧 Contact: [josias.uni.ccp@gmail.com]
🔗 LinkedIn: [https://www.linkedin.com/in/josias-pereira-12364a234/]
