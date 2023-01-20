module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "site-red": "#ff385c",
        "light-gray": "#f7f7f7",
        "dark-gray": "#222222",
      },
      height: {
        "top-toolbar": "80px",
        filterbar: "60px",
        informationBar: "58px",
        "foot-printbar": "47px",
      },
      fontSize: {
        ss: [
          "0.85rem",
          {
            lineHeight: "1.15rem",
            letterSpacing: "-0.008em",
            fontWeight: "400",
          },
        ],
      },
      scale: {
        60: "0.6",
      },
    },
  },
  plugins: [],
};
