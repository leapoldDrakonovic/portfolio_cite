document.addEventListener("DOMContentLoaded", () => {
  logoAnimation();
  titleAnimation();
});

function logoAnimation() {
  const text = document.getElementById("logo-text");
  const tl = gsap.timeline({ repeat: 0, yoyo: true });
  tl.fromTo(
    text,
    {
      opacity: 0,
      skewX: -20,
      x: -200,
      fontSize: 30,
    },
    {
      opacity: 1,
      x: -50,
      rotation: 0,
      duration: 0.3,
      fontSize: 30,
      fontWeight: "bold",
      ease: "power1.out",
    }
  );
}

function titleAnimation() {
  gsap.fromTo(
    "#title-name",
    {
      textContent: "", // Starting with an empty text
    },
    {
      textContent: "Egor Lapshin", // Ending with the full text
      duration: 1, // Duration of typing animation
      ease: "none", // No easing
      onUpdate: function () {
        // Update the text content with each frame
        let text = this.targets()[0];
        text.innerHTML = text.innerHTML
          .split("")
          .map((char, i) => {
            return i < this.progress() * text.textContent.length
              ? char
              : '<span aria-hidden="true"> </span>';
          })
          .join("");
      },
      onComplete: function () {
        tappingText();
      },
    }
  );

  function tappingText(container, text, fn) {
    gsap.fromTo(
      "#title-position",
      {
        textContent: "",
      },
      {
        textContent: "{Frontend Developer}",
        duration: 1,
        ease: "none",
        onUpdate: function () {
          let text = this.targets()[0];
          text.innerHTML = text.innerHTML
            .split("")
            .map((char, i) => {
              return i < this.progress() * text.textContent.length
                ? char
                : '<span aria-hidden="true"> </span>';
            })
            .join("");
        },
        onComplete: function () {
          showDesc();
        },
      }
    );
  }
}

function showDesc() {
  gsap.fromTo(
    ".first-section-content-text-p",
    {
      x: 1000,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
      onComplete: function () {
        gsap.fromTo(
          "#citizen",
          {
            x: 1000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          }
        );

        gsap.fromTo(
          "#current",
          {
            x: 2000,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.out",
          }
        );
      },
    }
  );
}

const burgerBtn = document.querySelector(".header-burger-btn-container");
const burger = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
  burger.classList.toggle("visible");

  const page = document.querySelector(".page");
  page.classList.toggle("burger-active");

  const burgerBtnTextContainer = burgerBtn.querySelector(
    ".header-burger-btn-container-logo"
  );
  const burgerBtnLines = burgerBtn.querySelector(
    ".header-burger-btn-container-spans"
  );

  const body = document.querySelector("body");
  if (burgerBtnTextContainer.innerText == "Menu") {
    burgerBtnTextContainer.style.margin = "0 auto";
    burgerBtnTextContainer.innerText = "Close";
    body.style.overflowY = "hidden";
    burgerBtnLines.style.display = "none";
  } else {
    burgerBtnTextContainer.innerHTML = "Menu";
    body.style.overflowY = "scroll";
    burgerBtnLines.style.display = "flex";
  }
  setTimeout(() => {
    burgerLinksAnimation();
  }, 200);
});

function burgerLinksAnimation() {
  const burgerList = document.querySelector(".burger-link-list");
  gsap.fromTo(
    burgerList,
    {
      opacity: 0,
      x: -1000,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power1.out",
    }
  );
}

gsap.registerPlugin(ScrollTrigger);

gsap.to(".second-section", {
  scrollTrigger: {
    trigger: ".second-section", // Триггер для запуска анимации
    start: "top 80%", // Начало анимации (когда верх секции достигает 80% высоты окна)
    end: "top 30%", // Конец анимации (когда верх секции достигает 30% высоты окна)
    toggleActions: "play none none reverse", // Действия анимации
  },
  opacity: 1, // Изменение прозрачности
  duration: 0.4, // Продолжительность анимации в секундах
});


gsap.to(".third-section", {
    scrollTrigger: {
      trigger: ".third-section", // Триггер для запуска анимации
      start: "top 80%", // Начало анимации (когда верх секции достигает 80% высоты окна)
      end: "top 30%",  // Конец анимации (когда верх секции достигает 30% высоты окна)
      toggleActions: "play none none reverse", // Действия анимации
    },
    visibility: "visible",
    opacity: 1, // Изменение прозрачности
    duration: 0.4, // Продолжительность анимации в секундах
  });

  ScrollTrigger.refresh();


  gsap.fromTo(".footer", {
    scrollTrigger: {
        trigger: ".footer", // Триггер для запуска анимации
        start: "top 80%", // Начало анимации (когда верх секции достигает 80% высоты окна)
        end: "top 30%",  // Конец анимации (когда верх секции достигает 30% высоты окна)
        toggleActions: "play none none reverse", // Действия анимации
      },
      textContent: "",
      visibility: "visible",
      opacity: 1, // Изменение прозрачности
      duration: 0.4,
      textContent: '' // Продолжительность анимации в секундах
    }, {
        textContent: "{Have a nice day!}",
          duration: 1,
          ease: "none",
          onUpdate: function () {
            let text = this.targets()[0];
            text.innerHTML = text.innerHTML
              .split("")
              .map((char, i) => {
                return i < this.progress() * text.textContent.length
                  ? char
                  : '<span aria-hidden="true"> </span>';
              })
              .join("");
          },

    })



    function smoothScroll (name) {
      
    }