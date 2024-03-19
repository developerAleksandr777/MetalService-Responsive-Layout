const burgerMenu = () => {
    const burger = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');
    const backdropBurger = document.querySelector('.backdrop__burger');

    const toggleMenu = () => {
        burger.classList.toggle('show-burger-btn');
        nav.classList.toggle('show-nav');
        backdropBurger.classList.toggle('show-backdrop');

        document.body.classList.toggle('menu-open');

    };

    burger.addEventListener('click', toggleMenu);
    backdropBurger.addEventListener('click', toggleMenu);
};

burgerMenu();
