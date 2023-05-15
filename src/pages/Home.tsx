import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../components/Review";
import { logo, testimonials, heroImages1, heroImages2 } from "../constants";
import { styles } from "../style";
import Footer from "../components/Footer";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-creative";

// Required Module
const { EffectCreative, Autoplay } = require("swiper");

type HomeProps = {
  title: string;
};

const testimonialReview = testimonials.map((rev): ReactElement => {
  return (
    <SwiperSlide key={rev.id}>
      <Review name={rev.name} review={rev.review} img={rev.img} />
    </SwiperSlide>
  );
});

const heroImage1 = heroImages1.map((img): ReactElement => {
  return (
    <SwiperSlide key={img.id}>
      <img
        src={img.img}
        alt={img.name}
        className="object-cover h-full w-full"
      />
    </SwiperSlide>
  );
});
const heroImage2 = heroImages2.map((img): ReactElement => {
  return (
    <SwiperSlide key={img.id}>
      <img
        src={img.img}
        alt={img.name}
        className="object-cover h-full w-full"
      />
    </SwiperSlide>
  );
});
const Home = ({ title }: HomeProps): ReactElement => {
  return (
    <>
      {/* Hero Section */}
      <section className="container">
        <div className={styles.flexCenter}>
          <img src={logo.source} alt={logo.name} className="w-1/5 my-6" />
        </div>
        <div className={`flex gap-5 `}>
          <Swiper
            speed={500}
            allowTouchMove={false}
            modules={[Autoplay]}
            grabCursor={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            className="mySwiper bg-amber-50  max-h-[720px] basis-full"
          >
            {heroImage1}
          </Swiper>
          <div className="bg-amber-50 h-[720px] basis-full flex justify-center items-center">
            <h1 className="text-2xl font-thin max-w-[14rem] text-center  capitalize tracking-widest">
              {title}
            </h1>
          </div>
          <Swiper
            speed={500}
            allowTouchMove={false}
            modules={[Autoplay]}
            grabCursor={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: false,
            }}
            className="mySwiper bg-amber-50  max-h-[720px] basis-full"
          >
            {heroImage2}
          </Swiper>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="container py-[8rem]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            Testimonials
          </h1>
        </div>
        <Swiper
          speed={500}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-100%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {testimonialReview}
        </Swiper>
        <h6 className="text-sm text-center">Slide to see more reviews</h6>
      </section>

      <Footer />
    </>
  );
};

export default Home;
