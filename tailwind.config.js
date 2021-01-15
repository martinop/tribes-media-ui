module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.js',
    ],
  },
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'error': '#B50000',
        'success': '#00B512',
      },
    },
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}