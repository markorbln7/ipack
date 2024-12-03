let infoPlayTrigers = document.querySelectorAll('.js-info-play-trigger');
let closePlayBtn = document.querySelector('.close-play');
infoPlayTrigers.forEach((infoTriger) => {
    infoTriger.addEventListener('click', (e) => {
        let infoVideo = e.target.getAttribute('data-video');
        console.log(infoVideo, 'this')
        document.querySelector('.info-video').src = infoVideo;
        document.querySelector('.product-play-overlay').classList.add('show');
        document.querySelector('.main-header').classList.add('zindexnone');
        document.querySelector('body').classList.add('no-scroll')
        document.querySelector('html').classList.add('no-scroll')
        setTimeout(() => {
            console.log('play')
            document.querySelector('.info-video').play();
        }, 300)
    })
})
closePlayBtn.addEventListener('click', (e) => {
    document.querySelector('.product-play-overlay').classList.remove('show');
    document.querySelector('.main-header').classList.remove('zindexnone');
    document.querySelector('body').classList.remove('no-scroll')
    document.querySelector('html').classList.remove('no-scroll')
    document.querySelector('.info-video').pause();
})
var swiper = new Swiper('.swiper-container', {
    loop: true, // Enable looping of the slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
          // Pause all videos first
          var videos = document.querySelectorAll('.swiper-slide video');
          videos.forEach(function (video) {
            console.log('pauza')
            video.pause();
            video.currentTime = 0; // Optional: reset video to the beginning
          });

          // Play video in the active slide
          setTimeout(() => {
            var activeSlide = document.querySelector('.swiper-slide-active video');
            console.log(activeSlide, 'activeSlide')
            if (activeSlide) {
                console.log('play')
                activeSlide.play();
            }
          }, 300)
        },
    },
  });