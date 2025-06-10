const config = {
  plugins: {
    "@tailwindcss/postcss": {
      mode: "jit",
      content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
      ],
      darkMode: "class",
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
};
export default config;
