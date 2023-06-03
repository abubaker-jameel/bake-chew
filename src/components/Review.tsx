import { ReactElement } from "react";
import { Link } from "react-router-dom";

type ReviewProps = {
  name: string;
  review: string;
  bgImg: string;
  cakeType: string;
};
const Review = ({
  name,
  review,
  bgImg,
  cakeType,
}: ReviewProps): ReactElement => {
  return (
    <div
      className={`relative ${bgImg} min-h-[30rem] md:min-h-[40rem] 2xl:min-h-[50rem] bg-cover bg-no-repeat bg-center before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gradient-to-r before:from-black/60 before:from-60% before:to-black/20  z-10`}
    >
      <div className="w-full md:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl absolute top-1/2 -translate-y-1/2 px-5 lg:px-20">
        <h4 className="text-xs md:text-sm font-light text-white opacity-90">
          {cakeType}
        </h4>
        <div className="border-l-2 border-l-amber-500 mt-1 mb-3 md:mt-2 md:mb-5 2xl:mt-5 2xl:mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-bold text-white opacity-90 pl-5 lg:pl-10 2xl:pl-20">
            {name}
          </h1>
        </div>
        <p className="text-xs md:text-sm 2xl:text-base font-light text-white opacity-90">
          {review}
        </p>
        <div className="mt-2 2xl:mt-4">
          <button className="text-xs md:text-sm 2xl:text-base text-white font-normal opacity-90 bg-amber-500 py-1 lg:py-2 px-3 lg:px-5 rounded-sm hover:bg-amber-800 transition-all mr-5">
            <Link to={"/about"}>About Me</Link>
          </button>
          <button className="text-xs md:text-sm 2xl:text-base text-white font-normal opacity-90 bg-white/20 py-1 lg:py-2 px-3 lg:px-5 rounded-sm hover:bg-white hover:text-black transition-all">
            <Link to={"/order"}>View Our Menu</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
