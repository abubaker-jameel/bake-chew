import { ReactElement } from "react";

type AboutProps = {
  title: string;
  name: string;
  paragraph: string;
  image: string;
  imageName: string;
};
const About = ({
  title,
  name,
  paragraph,
  image,
  imageName,
}: AboutProps): ReactElement => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:items-center lg:justify-normal pt-14 lg:h-screen">
      <div className="h-80 md:h-[40rem] lg:h-full bg-amber-50 lg:flex-1">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={imageName}
        />
      </div>
      <div className="p-5 md:p-10 lg:flex-1">
        <h1 className="text-4xl lg:text-6xl font-bold capitalize">{title}</h1>
        <p className="text-sm text-justify mt-4 capitalize 2xl:pr-40">
          {paragraph}
        </p>
        <h6 className="text-sm font-semibold mt-2">{name}</h6>
      </div>
    </section>
  );
};

export default About;
