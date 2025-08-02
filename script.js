const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function openModal(name, role, quote) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalRole").innerText = role;
  document.getElementById("modalQuote").innerText = quote;

  const modal = document.getElementById("modal");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
