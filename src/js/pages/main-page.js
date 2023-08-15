export default function mainPageInit() {
    let currentGroup = 'all';

    const portfolioTabs = document.querySelector('[data-portfolio-tabs]');

    if (!portfolioTabs) {
        return;
    }

    portfolioTabs.addEventListener('click', (e) => {
        if (e.target.dataset.portfolioTabs || e.target.tagName != 'LI') {
            return;
        }

        const tabs = e.target.closest('[data-portfolio-tabs]')

        tabs.querySelector('.active').classList.remove('active')

        e.target.classList.add('active')

        currentGroup = e.target.dataset.group;
        updateGallery();
    });

    function updateGallery() {
        const gallery = document.querySelector('[data-portfolio-gallery]');

        gallery.classList.add('transition');

        const imgs = gallery.querySelectorAll('[data-group]');

        imgs.forEach(img => {
            if (img.dataset.group == currentGroup) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }

            if (currentGroup == 'all') {
                img.style.display = 'block';
            }
        });

        setTimeout(() => {
            gallery.classList.remove('transition');
        }, 700);
    }

    // @TODO объединить в одну функцию с scrollIntoGallery
    function scrollIntoPortfolio() {
            const portfolio = document.querySelector('.portfolio__content');

            const yOffset = -120;
            const y = portfolio.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
    }

    function scrollIntoGallery() {
            const gallery = document.querySelector('.gallery');

            const yOffset = -120;
            const y = gallery.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
    }

    setTimeout(() => {
        if (window.location.href.includes('#portfolio')) {
            scrollIntoPortfolio();
        }
    }, 500);

    setTimeout(() => {
        if (window.location.href.includes('#gallery')) {
            scrollIntoGallery();
        }
    }, 500);

    document.querySelector('.main-header a[href="/#portfolio"]').addEventListener('click', () => {
        scrollIntoPortfolio();
    });

    document.querySelector('.main-header a[href="/#gallery"]').addEventListener('click', () => {
        scrollIntoGallery();
    });

    document.querySelector('.page-slideout-menu a[href="/#portfolio"]').addEventListener('click', () => {
        window.slideout.close();
        scrollIntoPortfolio();
    });

    document.querySelector('.page-slideout-menu a[href="/#gallery"]').addEventListener('click', () => {
        window.slideout.close();
        scrollIntoGallery();
    });
}
