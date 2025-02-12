function toggleCollapse(id) {
  const collapseElement = document.getElementById(id);
  collapseElement.classList.toggle("hidden");
}

// search bar
document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");
  const searchInput = document.getElementById("search-input");
  const searchSuggestions = document.getElementById("search-suggestions");

  // Mock data for search suggestions
  const mockSuggestions = [
    "Table",
    "Sofa",
    "Mirror",
    "Lamp",
    "Bed",
    "Chair",
    "Desk",
    "Bookshelf",
    "Rug",
    "Curtains",
  ];

  // Toggle search bar visibility
  searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    searchBar.classList.toggle("visible");
    searchBar.classList.toggle("hidden");
    searchInput.focus(); // Focus on the input when the search bar is opened
  });

  // Handle search input
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();
    if (query === "") {
      searchSuggestions.classList.add("hidden");
      return;
    }

    // Filter suggestions based on the query
    const filteredSuggestions = mockSuggestions.filter((item) =>
      item.toLowerCase().includes(query)
    );

    // Display suggestions
    if (filteredSuggestions.length > 0) {
      searchSuggestions.innerHTML = filteredSuggestions
        .map((item) => `<div>${item}</div>`)
        .join("");
      searchSuggestions.classList.remove("hidden");
    } else {
      searchSuggestions.innerHTML = `<div>No results found</div>`;
      searchSuggestions.classList.remove("hidden");
    }
  });

  // Hide suggestions when clicking outside
  document.addEventListener("click", function (e) {
    if (!searchBar.contains(e.target)) {
      searchSuggestions.classList.add("hidden");
    }
  });

  // Handle suggestion click
  searchSuggestions.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
      searchInput.value = e.target.textContent;
      searchSuggestions.classList.add("hidden");
      // You can also trigger a search here if needed
      console.log("Searching for:", e.target.textContent);
    }
  });
});

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
