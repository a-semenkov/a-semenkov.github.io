import SmoothScroll from "smooth-scroll";
import Swiper from "swiper";

// Подключение свайпера
// Swiper.use([Navigation, Pagination]);
const swiperSkills = new Swiper(document.querySelector(".swiper-skills"), {
  spaceBetween: 15,
  slidesPerView: 7,
  loop: true,
});

const swiperPortfolio = new Swiper(
  document.querySelector(".swiper-portfolio"),
  {
    spaceBetween: 15,
    slidesOffsetBefore: 120,
    slidesPerView: 2,
    breakpoints: {
      1100: {
        spaceBetween: 35,
        slidesOffsetBefore: 150,
        slidesPerView: 4,
      },
      500: {
        spaceBetween: 35,
        slidesOffsetBefore: 150,
        slidesPerView: 3,
      },
    },
    freeMode: true,
    loop: true,
  }
);

// Подключение плавной прокрутки к якорям

const scroll = new SmoothScroll("[data-scroll]");
