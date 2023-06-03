import { ReactElement } from "react";

type PropsUnderlay = {
  title: string;
};

const UnderLay = ({ title }: PropsUnderlay): ReactElement => {
  return (
    <section className="pt-14 relative flex justify-center items-center w-full bg-amber-100 bg-[url('./assets/cakeImage11.jpg')] bg-no-repeat bg-center bg- bg-cover before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[rgba(0,0,0,.4)] h-32 md:h-40 lg:h-60">
      <h1 className=" text-xl lg:text-2xl text-white opacity-90 font-bold uppercase">
        {title}
      </h1>
    </section>
  );
};

export default UnderLay;
