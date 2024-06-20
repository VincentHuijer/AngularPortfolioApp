/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'chat-bg': "url('/assets/fotos/AIChatBackground.png')",
        'chat-bg2': "url('/assets/fotos/AIBackground.png')",
        'chat-bg3': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'chat-bg4': "url('/assets/fotos/Gradient1.png')",
        'chat-bg5': "url('/assets/fotos/Gradient2.png')",
      })
    },
  },
  plugins: [],
}

