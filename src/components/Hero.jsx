// import { Link } from "react-router-dom";
import HeroCard from "./HeroCard";
import Swiper from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Hero({ blogs }) {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // direction: "vertical",
    loop: true,

    // configure Swiper to use modules
    modules: [Navigation],
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // console.log(blogs);

  return (
    <div className="flex justify-start items-start w-full h-full">
      {/* left side */}
      <div className="w-full h-full swiper">
        <div className="swiper-wrapper">
          {blogs.map((blog) => (
            <div key={blog._id} className="swiper-slide">
              <HeroCard blog={blog}></HeroCard>
            </div>
          ))}
        </div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Hero;
