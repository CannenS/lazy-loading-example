const images = [...document.querySelectorAll("img")];

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
      } else {
        entry.target.src = "#";
      }
    });
  },
  {
    rootMargin: "0px 0px -50px 0px",
  }
);

images.forEach((item) => {
  observer.observe(item);
});
