# Deployment Guide for devilworks.dev

## Quick Start

### Option 1: Vercel (Recommended)

Vercel automatically detects Vue + Vite projects and configures everything for you.

```bash
npm install -g vercel
vercel
```

Follow the prompts, and your site will be live in seconds!

### Option 2: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Or connect your Git repository directly in the Netlify dashboard.

### Option 3: GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/',  // or your repo name if not using a custom domain
  // ... rest of config
}
```

2. Deploy:
```bash
npm run build
# Then push dist/ to your gh-pages branch
```

### Option 4: Self-Hosted Server

1. Build the project:
```bash
npm run build
```

2. Copy the `dist/` folder contents to your server

3. Configure your web server to serve the SPA correctly:

#### Nginx
```nginx
server {
    listen 80;
    server_name devilworks.dev www.devilworks.dev;

    location / {
        root /path/to/dist;
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache
Create `.htaccess` in the `dist/` folder:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

## Domain Configuration

Point your domain (devilworks.dev) to your hosting service's nameservers or IP address according to your host's instructions.

## HTTPS

- **Vercel/Netlify**: Automatic SSL certificates included
- **Self-hosted**: Use Let's Encrypt with Certbot

```bash
# Using Certbot with Nginx
sudo certbot --nginx -d devilworks.dev
```

## Environment Variables

Create a `.env` file based on `.env.example` for any environment-specific settings.

## Performance Tips

1. The build already includes:
   - Code minification
   - CSS optimization
   - Asset compression

2. For additional optimization:
   - Enable gzip compression on your server
   - Set long cache expiration for assets in `dist/assets/`
   - Set short cache expiration for `index.html`

### Nginx Cache Headers Example
```nginx
location ~* \.(js|css|png|jpg|jpeg|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location /index.html {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Monitoring

Set up basic monitoring for uptime and performance:
- Vercel/Netlify: Built-in analytics
- Self-hosted: Consider using services like Uptime Robot, StatusCake, or Pingdom

## Updates

To update the landing page:

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Deploy: Push to your hosting service

---

**That's it!** Your devilworks.dev landing page is now live and beautiful. 👿⚡
