// --- Анімація повторної появи послуг при скролі ---
const serviceBoxes = document.querySelectorAll(".service-box");

const observerServices = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

serviceBoxes.forEach((box) => observerServices.observe(box));

// --- Кнопка "вгору" ---
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("show", window.scrollY > 100);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Fullscreen меню ---
document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  if (burgerBtn && fullscreenMenu && closeMenuBtn) {
    burgerBtn.addEventListener("click", () => {
      fullscreenMenu.style.display = "flex";
      document.body.classList.add("menu-open");
    });

    closeMenuBtn.addEventListener("click", () => {
      fullscreenMenu.style.display = "none";
      document.body.classList.remove("menu-open");
    });
  } else {
    console.error("❌ Один із елементів бургер-меню не знайдено!");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll("audio");

  players.forEach((player) => {
    player.addEventListener("play", () => {
      players.forEach((other) => {
        if (other !== player) {
          other.pause();
        }
      });
    });
  });

  const openMenuBtn = document.getElementById("openMenuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");
  const menuItems = document.querySelectorAll(".menu-item");

  openMenuBtn.addEventListener("click", () => {
    fullscreenMenu.style.display = "flex";
  });

  closeMenuBtn.addEventListener("click", () => {
    fullscreenMenu.style.display = "none";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      fullscreenMenu.style.display = "none";
    });
  });
});

