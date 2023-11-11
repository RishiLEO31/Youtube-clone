document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });
});