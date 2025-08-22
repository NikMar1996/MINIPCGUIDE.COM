// Фільтрація карточок по категоріях
const buttons = document.querySelectorAll(".categories button");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Переключення мов (спрощено)
const translations = {
  uk: {
    home: "Головна",
    reviews: "Огляди",
    articles: "Статті",
    rating: "Рейтинг",
    contacts: "Контакти",
  },
  en: {
    home: "Home",
    reviews: "Reviews",
    articles: "Articles",
    rating: "Rating",
    contacts: "Contacts",
  },
  de: {
    home: "Startseite",
    reviews: "Rezensionen",
    articles: "Artikel",
    rating: "Bewertung",
    contacts: "Kontakte",
  }
};

document.getElementById("language-select").addEventListener("change", e => {
  const lang = e.target.value;
  const navLinks = document.querySelectorAll("nav a");
  if (translations[lang]) {
    navLinks[0].textContent = "🏠 " + translations[lang].home;
    navLinks[1].textContent = "📦 " + translations[lang].reviews;
    navLinks[2].textContent = "📰 " + translations[lang].articles;
    navLinks[3].textContent = "⭐ " + translations[lang].rating;
    navLinks[4].textContent = "📞 " + translations[lang].contacts;
  }
});
