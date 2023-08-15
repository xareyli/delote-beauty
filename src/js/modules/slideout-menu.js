import "../libs/slideout.min.js"

export default function startSlideout() {
    const panel = document.querySelector('.page');
    const menu = document.querySelector('.page-slideout-menu');
    const blackout = document.querySelector('.page-blackout');

    window.slideout = new Slideout({
        'panel': panel,
        'menu': menu,
        'padding': 256,
        'tolerance': 70,
        'side': 'right',
    });

    document.querySelector('.main-header__burger').addEventListener('click', () => slideout.toggle());
    document.querySelector('.page-slideout-menu__close-btn').addEventListener('click', () => slideout.close());

    slideout.on('beforeopen', () => {
        blackout.classList.add('_blackout--visible')
        document.querySelector('.page-slideout-menu').classList.add('slideout-open');
    });

    slideout.on('close', () => {
        blackout.classList.remove('_blackout--visible')
        document.querySelector('.page-slideout-menu').classList.remove('slideout-open');
    });

    blackout.addEventListener('click', () => {
        slideout.close();
    });
}
