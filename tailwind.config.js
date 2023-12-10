/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      brand: "#70e000",
      brandDark: "#006400",
      brandLight: "#70e000",
      brandLighter: "#ccff33",
      blackSeeThrough: "rgba(0,0,0,0.9)",
      blackLighterSeeThrough: "rgba(0,0,0,0.6)",
      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
        950: "#000000",
      },
      orange: "#FA9c1b",
      red: "#F56565",
      green: "#68D391",
      blue: "#4299E1",
      yellow: "#ECC94B",
      purple: "#805AD5",
      pink: "#D53F8C",
    },
    extend: {
      backgroundImage: {
        "smoothie-card":
          "url(https://images.unsplash.com/photo-1623400518628-2257d64502f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
        "supplements-card":
          "url('https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        "workout-card":
          "url('https://images.unsplash.com/photo-1591258370814-01609b341790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
      },
      boxShadow: {
        "amenity-card": "0px 10px 36px 0px, rgba(0, 0, 0, 1)",
        "shop-card":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        "shop-card-hover":
          "rgba(60, 64, 67, 0.3) 0px 2px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
      keyframes: {
        "90degRight": {
          "0%, 100%": {
            transform: "rotate(0deg)",
            top: "0",
          },
          "50%": {
            transform: "rotate(90deg)",
            top: "50%",
          },
        },
        "90degLeft": {
          "0%, 100%": {
            transform: "rotate(0deg)",
            bottom: "-10px",
          },
          "50%": {
            transform: "rotate(90deg)",
            bottom: "20px",
          },
        },
        fromTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fromLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "90degRight": "90degRight 3s ",
        "90degLeft": "90degLeft 3s  ",
        fromTop: "fromTop 1s ease-in-out",
        fromLeft: "fromLeft 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
