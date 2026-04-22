document.querySelectorAll(".card").forEach((card) => {
  const front = card.querySelector(".card__front");

  front.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
