document.addEventListener("DOMContentLoaded", () => {
    let listBg = document.querySelectorAll('.bg');
    let listTab = document.querySelectorAll('.tab');
    let titleBanner = document.querySelector('.banner h1');

    window.addEventListener("scroll", () => {
        let top = window.scrollY; // Fixed incorrect `this.scrollY`
        
        listBg.forEach((bg, index) => {
            if (index !== 0 && index !== listBg.length - 1) {
                bg.style.transform = `translateY(${(top * index / 2)}px)`;
            } else if (index === 0) {
                bg.style.transform = `translateY(${(top / 3)}px)`;
            }
        });

        if (titleBanner) {
            titleBanner.style.transform = `translateY(${(top * 2)}px)`;
        }

        listTab.forEach(tab => {
            if (tab.offsetTop - top < 550) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    });
});
