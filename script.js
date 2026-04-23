document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;

    card.classList.toggle("flipped");
  });
});

document.getElementById("copy-email").addEventListener("click", (e) => {
  e.stopPropagation();

  const email = "coleblu84@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 700);
  });
});
