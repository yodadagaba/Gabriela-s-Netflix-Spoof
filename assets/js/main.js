const nav = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('header_bg_black');
  } else {
    nav.classList.remove('header_bg_black');
  }
});
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
    centerSlide: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

  //Dropdown
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

//Audio Play
const playButton = document.getElementById('playButton');
const playImage = playButton.querySelector('img');
const playText = document.getElementById('playText');
const audioElement = document.getElementById('audioElement');

playButton.addEventListener('click', toggleAudio);


audioElement.addEventListener('ended', function() {
    playImage.src = 'assets/images/play.svg';
    playText.textContent = 'Play';
});


function toggleAudio() {
    if (audioElement.paused || audioElement.ended) {
        audioElement.play();
        playImage.src = 'assets/images/pause.svg';
        playText.textContent = 'Pause';
    } else {
        audioElement.pause();
        playImage.src = 'assets/images/play.svg';
        playText.textContent = 'Play';
    }
}