import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "../components/Review";
import { logo, testimonials, heroImages1, heroImages2 } from "../constants";
import { styles } from "../style";
// import cakeImage7 from "../assets/cakeImage7.jpg"
// Swiper Styles
import "swiper/css";
import "swiper/css/effect-creative";

// Required Module
// @ts-ignore: Unreachable code error
import { EffectCreative, Autoplay } from "swiper";

type HomeProps = {
  title: string;
};

const testimonialReview = testimonials.map((rev): ReactElement => {
  return (
    <SwiperSlide key={rev.id}>
      <Review
        cakeType={rev.cakeType}
        name={rev.name}
        review={rev.review}
        bgImg={rev.bgImg}
      />
    </SwiperSlide>
  );
});

const heroImagesSlide1 = heroImages1.map((img): ReactElement => {
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
const heroImagesSlide2 = heroImages2.map((img): ReactElement => {
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
      <section className="pt-14">
        <div className={`${styles.flexCenter} h-20 xl:h-24 2xl:h-40`}>
          <img
            src={logo.source}
            alt={logo.name}
            className="object-contain w-full h-full px-5"
          />
        </div>
        <div className={`flex gap-5`}>
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
            className="mySwiper bg-amber-50  h-[720px] flex-1 hidden xl:block xl:h-[36rem] 2xl:h-[46rem]"
          >
            {heroImagesSlide1}
          </Swiper>
          <div className="flex-1 relative bg-amber-50 h-[45rem] flex justify-center items-center bg-[url('./assets/cakeImage7.jpg')] bg-cover bg-no-repeat before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[rgba(0,0,0,.4)] overflow-hidden z-10 xl:h-[36rem] 2xl:h-[46rem]">
            <h1 className="text-lg md:text-xl 2xl:text-2xl font-bold  max-w-[18rem] text-center  capitalize tracking-widest text-white opacity-80">
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
            className="mySwiper bg-amber-50  h-[720px] flex-1 hidden xl:block xl:h-[36rem] 2xl:h-[46rem]"
          >
            {heroImagesSlide2}
          </Swiper>
        </div>
      </section>

      {/* Tailored Section */}
      <section className="relative w-full h-40 grid place-items-center bg-[url('./assets/tailoredImg.jpg')] bg-no-repeat bg-cover bg-bottom before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[rgba(0,0,0,.4)] z-10 mt-10">
        <h1 className="text-lg md:text-xl 2xl:text-2xl px-2 text-center font-bold opacity-90 text-white uppercase">
          ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE
        </h1>
      </section>
      {/* Testimonial Section */}
      <section className="mb-5">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-gray-800 uppercase py-5">
            Testimonials
          </h3>
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
        <h6 className="text-xs lg:text-sm text-center">
          Slide to see more reviews
        </h6>
      </section>
    </>
  );
};

export default Home;
