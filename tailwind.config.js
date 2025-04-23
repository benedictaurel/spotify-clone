/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SpotifyMix: ["Spotify Mix", "sans-serif"],
      }
    },
  },
  plugins: [],
}