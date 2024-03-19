document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.header__nav ul li');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(function (t) {
                t.classList.remove('active');
            });
            tab.classList.add('active');
        });
    });
});
