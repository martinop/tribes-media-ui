module.exports = {
  plugins: [
    require('tailwindcss")("./tailwind.config.js'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('autoprefixer')
  ],
};