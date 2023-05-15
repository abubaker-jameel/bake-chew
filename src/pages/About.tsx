import { ReactElement } from "react";

type AboutProps = {
  title: string;
  paragraph: string;
  image: string;
  imageName: string;
};
const About = ({
  title,
  paragraph,
  image,
  imageName,
}: AboutProps): ReactElement => {
  return (
    <section className="container flex justify-center items-center h-[90vh]">
      <div className="h-[500px] bg-amber-50 basis-2/3 mx-40">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={imageName}
        />
      </div>
      <div className="mr-40 basis-full">
        <h1 className="text-xl font-bold capitalize">{title}</h1>
        <p className="text-sm text-justify my-4 capitalize">{paragraph}</p>
      </div>
    </section>
  );
};

export default About;
