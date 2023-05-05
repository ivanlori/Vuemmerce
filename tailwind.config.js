module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      blue_light: '#b9e2fc',
      blue: '#51bafc',
      black: '#000000',
      white: '#ffffff',
      grey_light: '#edeaeb',
      grey_dark: '#515151',
      red: '#ed4f10',
      green: '#24e527',
      gold : '#f1c40f'

		},
    extend: {
      boxShadow: {
        'custom': '0 0px 3px 1px rgba(0, 0, 0, 0.08)',
      }
    }
  },
  plugins: [],
}
