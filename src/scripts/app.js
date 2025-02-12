function toggleCollapse(id) {
  const collapseElement = document.getElementById(id);
  collapseElement.classList.toggle("hidden");
}

// Custom Tailwind Config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
        slideIn: "slideIn 0.3s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
};
