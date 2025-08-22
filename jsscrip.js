// Фільтрація карточок
const filterButtons = document.querySelectorAll(".categories button");
const productList = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    productList.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Перемикання мов (спрощено)
const translations = {
  en: {
    home: "Home",
    reviews: "Reviews",
    articles: "Articles",
    rating: "Rating",
    contacts: "Contacts",
    footer: "Project created for reviews and tips on choosing mini-PCs."
  },
  uk: {
    home: "Головна",
    reviews: "Огляди",
    articles: "Статті",
    rating: "Рейтинг",
    contacts: "Контакти",
    footer: "Проєкт створено для оглядів та порад щодо вибору міні-ПК."
  },
  de: {
    home: "Startseite",
    reviews: "Bewertungen",
    articles: "Artikel",
    rating: "Bewertung",
    contacts: "Kontakt",
    footer: "Projekt erstellt für Rezensionen und Tipps zur Auswahl von Mini-PCs."
  },
  fr: {
    home: "Accueil",
    reviews: "Avis",
    articles: "Articles",
    rating: "Classement",
    contacts: "Contacts",
    footer: "Projet créé pour des critiques et des conseils sur le choix des mini-PC."
  },
  es: {
    home: "Inicio",
    reviews: "Reseñas",
    articles: "Artículos",
    rating: "Clasificación",
    contacts: "Contactos",
    footer: "Proyecto creado para reseñas y consejos sobre mini-PCs."
  },
  pl: {
    home: "Strona główna",
    reviews: "Recenzje",
    articles: "Artykuły",
    rating: "Ranking",
    contacts: "Kontakt",
    footer: "Projekt stworzony dla recenzji i porad dotyczących wyboru mini-PC."
  }
};

const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", () => {
  const lang = languageSelect.value;
  const t = translations[lang];

  const navLinks = document.querySelectorAll("header nav a");
  navLinks[0].textContent = "🏠 " + t.home;
  navLinks[1].textContent = "📦 " + t.reviews;
  navLinks[2].textContent = "📰 " + t.articles;
  navLinks[3].textContent = "⭐ " + t.rating;
  navLinks[4].textContent = "📞 " + t.contacts;

  document.querySelector("footer p:last-child").textContent = t.footer;
});
