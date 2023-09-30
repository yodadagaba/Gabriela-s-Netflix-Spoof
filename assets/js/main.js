const nav = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    nav.classList.add('header_bg_black');
  } else {
    nav.classList.remove('header_bg_black');
  }
});

//Swiper
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5.5,
//     spaceBetween: 5,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     gragCursor: 'true',
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//   });
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
