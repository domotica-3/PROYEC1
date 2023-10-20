window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight * 0.9) {
    document.querySelector(".container-vertical").classList.add("visible");
  } else {
    document.querySelector(".container-vertical").classList.remove("visible");
  }
});
