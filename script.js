

// scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// open watsapp
function openWats() {
    window.open('https://wa.me/79168255555', "_blank")
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
    },



});
const swiperTwo = new Swiper('.swiper-two', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    pagination: {
        el: '.swiper-pagination',
    },



});