document.querySelector('.video-intro video').onended = function() {
  document.querySelector('.video-intro').style.display = 'none';
  document.querySelector('.container').classList.add('animate-in'); // Triggers slide-in animation
};
new Swiper('.brands-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
});