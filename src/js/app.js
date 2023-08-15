import turnWebp from "./modules/functions.js"
import spoilersInit from "./modules/spoiler.js"
import dynamicAdaptiveInit from "./modules/dynamic-adaptive.js"
import turnIbgOn from "./modules/ibg.js"
import startSlideout from "./modules/slideout-menu.js"
import userScripts from "./modules/script.js"
import initMainPage from "./pages/main-page.js"


function onDocumentLoaded() {
    document.querySelector('body').classList.remove('_preload');

    startSlideout();
    turnWebp();
    spoilersInit();
    turnIbgOn();
    dynamicAdaptiveInit();
    userScripts();
    initHeader();
    initMainPage();

    const heroScroll = document.querySelector('.hero__scroll');

    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            window.scrollTo({
                top: document.documentElement.clientHeight,
                behavior: 'smooth'
            });
        });
    }

    setTimeout(() => {
        document.querySelector('._preloader').classList.add('_preloader--done');
    }, 450);
}

window.onload = onDocumentLoaded;

function initHeader() {
    const header = document.querySelector('.main-header');

    document.addEventListener('scroll', function(e) {
        if (window.pageYOffset > 200) {
            header.classList.add('main-header--scroll');
        } else {
            header.classList.remove('main-header--scroll');
        }
    });

    const headerNav = document.querySelectorAll('.main-header__nav');

    if (headerNav.length < 2) {
        return;
    }

    if (window.location.href.includes('artisans')) {
        headerNav[0].querySelector('li:nth-child(2)').classList.add('active');
    } else if (window.location.href.includes('service')) {
        headerNav[0].querySelector('li:nth-child(3)').classList.add('active');
    } else if (window.location.href.includes('contacts')) {
        headerNav[1].querySelector('li:nth-child(3)').classList.add('active');
    } else {
        headerNav[0].querySelector('li:nth-child(1)').classList.add('active');
    }
}
