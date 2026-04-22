document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;

    card.classList.toggle("flipped");
  });
});
