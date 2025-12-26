// const gallery = document.querySelector('.gallery');

// gallery.addEventListener('wheel', (e) => {
//   e.preventDefault();
//   gallery.scrollLeft += e.deltaY;
// });

const gallery = document.getElementById(".gallery");
const scrollAmount = gallery.clientWidth * 0.8;

document.querySelector(".scroll-btn.left").onclick = () => {
  gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
};

document.querySelector(".scroll-btn.right").onclick = () => {
  gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
};
