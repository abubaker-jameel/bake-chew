import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ReactElement } from "react";

const reactFsLightBox = document.getElementById(
  "react-fs-lightbox"
) as HTMLElement;

type ReviewProps = {
  name: string;
  review: string;
  img: string;
};
const Review = ({ name, review, img }: ReviewProps): ReactElement => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="flex gap-40 mx-44 my-20">
      <div className="basis-full">
        <p className="text-sm">{review}</p>
        <h1 className="my-10">{name}</h1>
      </div>
      <div className="grid place-items-center bg-emerald-300 basis-full h-[500px]">
        <button className="max-w-xs" onClick={() => setToggler(!toggler)}>
          <img src={img} alt="" />
        </button>
        {createPortal(
          <FsLightbox toggler={toggler} sources={[img]} />,
          reactFsLightBox
        )}
      </div>
    </div>
  );
};

export default Review;
