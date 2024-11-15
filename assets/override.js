let infoPlayTrigers = document.querySelectorAll('.js-info-play-trigger');
let closePlayBtn = document.querySelector('.close-play');
infoPlayTrigers.forEach((infoTriger) => {
    infoTriger.addEventListener('click', (e) => {
        let infoVideo = e.target.getAttribute('data-video');
        console.log(infoVideo, 'this')
        document.querySelector('.info-video').src = infoVideo;
        document.querySelector('.product-play-overlay').classList.add('show');
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
    document.querySelector('body').classList.remove('no-scroll')
    document.querySelector('html').classList.remove('no-scroll')
    document.querySelector('.info-video').pause();
})