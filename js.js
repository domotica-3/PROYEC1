window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".container-vertical").classList.add("visible");
  } else {
    document.querySelector(".container-vertical").classList.remove("visible");
  }
});
