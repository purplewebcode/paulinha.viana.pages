javascript
/* =========================================================
   PORTFÓLIO ARTÍSTICO
   JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}


/* =========================================================
   AOS - ANIMAÇÕES DE ENTRADA
========================================================= */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        easing: "ease-out-cubic",

        once: true,

        offset: 80

    });

}


/* =========================================================
   SCROLL SUAVE
========================================================= */

const menuLinks =
    document.querySelectorAll(
        'nav a[href^="#"], .btn[href^="#"]'
    );


menuLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header
                ? header.offsetHeight
                : 0;

        const targetPosition =
            target.getBoundingClientRect().top
            + window.scrollY
            - headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   EFEITO HOVER NOS CARDS
========================================================= */

const cards =
    document.querySelectorAll(
        ".card, .experience-card, .gallery-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================================
   EFEITO DE MOVIMENTO SUAVE NAS IMAGENS
========================================================= */

const experienceImages =
    document.querySelectorAll(
        ".experience-image img"
    );


experienceImages.forEach(image => {

    const container =
        image.closest(
            ".experience-image"
        );

    if (!container) {
        return;
    }


    container.addEventListener(
        "mousemove",
        event => {

            const rect =
                container.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const moveX =
                (x / rect.width - 0.5) * 8;


            const moveY =
                (y / rect.height - 0.5) * 8;


            image.style.transform =
                `scale(1.05) translate(${moveX}px, ${moveY}px)`;

        }
    );


    container.addEventListener(
        "mouseleave",
        () => {

            image.style.transform =
                "scale(1) translate(0, 0)";

        }
    );

});


/* =========================================================
   PARALLAX DISCRETO NO HERO
========================================================= */

const hero =
    document.querySelector(".hero");


if (hero) {

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.scrollY;


            if (scroll < window.innerHeight) {

                hero.style.backgroundPosition =
                    `center ${scroll * 0.25}px`;

            }

        }
    );

}


/* =========================================================
   ANIMAÇÃO DAS HABILIDADES
========================================================= */

const skills =
    document.querySelectorAll(
        ".skills span"
    );


skills.forEach(skill => {

    skill.addEventListener(
        "mouseenter",
        () => {

            skill.style.transform =
                "translateY(-4px)";

        }
    );


    skill.addEventListener(
        "mouseleave",
        () => {

            skill.style.transform =
                "translateY(0)";

        }
    );

});


/* =========================================================
   REVELAÇÃO DOS ELEMENTOS
   FUNCIONA MESMO SEM AOS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".experience-card, .gallery-card, .card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   BOTÃO DO INSTAGRAM
========================================================= */

const instagramLinks =
    document.querySelectorAll(
        'a[href*="instagram.com"]'
    );


instagramLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            link.style.opacity =
                "0.7";

            setTimeout(() => {

                link.style.opacity =
                    "1";

            }, 300);

        }
    );

});


/* =========================================================
   ANO AUTOMÁTICO DO FOOTER
========================================================= */

const footer =
    document.querySelector("footer");


if (footer) {

    const paragraphs =
        footer.querySelectorAll("p");


    if (paragraphs.length > 0) {

        const currentYear =
            new Date().getFullYear();


        paragraphs[0].innerHTML =
            `© ${currentYear} Paulinha Viana`;

    }

}


/* =========================================================
   PREVENIR ERROS DE IMAGEM
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.classList.add(
                "image-error"
            );

        }
    );

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "Portfólio carregado com sucesso."
);
