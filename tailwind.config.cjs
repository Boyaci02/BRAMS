// Ersätter cdn.tailwindcss.com (SEO-åtgärd 21/9 2026). Samma tema som sidornas tidigare inline-config.
// brand-cream skiljer mellan sidor (#f9f6f1 / #fef3e9) och styrs därför av en CSS-variabel per sida.
module.exports = {
  content: ['./*.html', './public/i18n.js', './public/order-modal.js'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0c0c0c',
        'brand-green': '#2d4a3e',
        'brand-gold': '#c68c17',
        'brand-cream': 'rgb(var(--brand-cream-rgb) / <alpha-value>)',
        'max-green': '#008435',
        'max-red': '#e31b23',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
};
