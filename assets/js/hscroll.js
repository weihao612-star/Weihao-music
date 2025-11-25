const gallery = document.querySelector('.gallery');

gallery.addEventListener('wheel', (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});
