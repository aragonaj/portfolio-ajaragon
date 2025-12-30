// Mostrar sidebar
document.addEventListener("DOMContentLoaded", () => {
    const buttonMenu = document.querySelector(".button-menu");
    const sidebar = document.querySelector(".header-sidebar");
    const buttonClose = document.querySelector(".button-close-menu");

    // Mostrar sidebar
    buttonMenu.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    // Ocultar sidebar
    buttonClose.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

// Cambiar tema
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (event) => {
        if (event.target.closest(".button-theme")) {
            document.documentElement.classList.toggle("dark");

            const isDark = document.documentElement.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
        }
    });

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    }
});

// Cambiar de color el header al llegar al main
const header = document.querySelector('.header');
const sentinel = document.querySelector('.header-sentinel');

const observer = new IntersectionObserver(
    ([entry]) => {
        if (!entry.isIntersecting) {
            // El sentinel salió por arriba => el header está cubriendo el main
            header.classList.add('covering');
        } else {
            // El sentinel vuelve a ser visible => el header YA NO está cubriendo el main
            header.classList.remove('covering');
        }
    },
    {
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px`
    }
);

observer.observe(sentinel);


