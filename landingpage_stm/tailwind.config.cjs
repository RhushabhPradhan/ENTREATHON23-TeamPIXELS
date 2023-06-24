/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      colors: {
        "pri-10": "#E7F3FB",
        "pri-20": "#9BCCEF",
        "pri-30": "#71B7E9",
        "pri-40": "#3498DF",
        "pri-50": "#0B83D9",
        "pri-60": "#085C98",

        "sec-10": "#E6E7EE",
        "sec-20": "#969BBB",
        "sec-30": "#6B729E",
        "sec-40": "#2B3574",
        "sec-50": "#000C58",
        "sec-60": "#00083E",

        "ter-10": "#FEF0E7",
        "ter-20": "#FAC39B",
        "ter-30": "#F7AA72",
        "ter-40": "#F48535",
        "ter-50": "#F26C0C",
        "ter-60": "#A94C08",

        "neu-10": "#17181A",
        "neu-20": "#666E80",
        "neu-30": "#98A1B3",
        "neu-40": "#E1E2E6",
        "neu-50": "#F7F8FA",
        "neu-60": "#E1E2E6 ",

        "black-80": "rgba(0, 0, 0, 0.8)",
        "black-60": "rgba(0, 0, 0, 0.6)",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "black-30": "rgba(0, 0, 0, 0.3)",
        "black-20": "rgba(0, 0, 0, 0.2)",

        "white-80": "rgba(255, 255, 255, 0.8)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-40": "rgba(255, 255, 255, 0.4)",
        "white-30": "rgba(255, 255, 255, 0.3)",
        "white-20": "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: { "desktop-headline-3": "Poppins" },

      fontSize: {
        // Desktop Headings
        "dh-1": "56px",
        "dh-2": "48px",
        "dh-3": "32px",
        "dh-4": "24px",
        "dh-5": "20px",
        "db-1": "18px",
        "db-2": "16px",

        // Tablet Headings
        "th-1": "48px",
        "th-2": "32px",
        "th-3": "24px",
        "th-4": "20px",
        "th-5": "16px",
        "tb-1": "16px",
        "tb-2": "14px",

        // Mobile Headings
        "mh-1": "32px",
        "mh-2": "24px",
        "mh-3": "20px",
        "mh-4": "16px",
        "mh-5": "14px",
        "mb-1": "16px",
        "mb-2": "14px",

        // Subtitles
        phdr: "14px",
        desc1: "12px",
        desc2: "10px",

        // buttons
        "btn-18": "18px",
        "btn-16": "16px",
        "btn-14": "14px",
        "btn-12": "12px",

        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      spacing: {
        "ls-4": "4px",
        "ls-8": "8px",
        "ls-12": "12px",
        "ls-16": "16px",
        "ls-24": "24px",
        "ls-32": "32px",
        "ls-40": "40px",
        "ls-48": "48px",
        "ls-56": "56px",
        "ls-64": "64px",
        "ls-80": "80px",
        "ls-120": "120px",
        "ls-160": "160px",
      },
    },
  },
  corePlugins: { preflight: false },
};
