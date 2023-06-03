import FsLightbox from "fslightbox-react";
import { useState, ReactElement } from "react";
import { createPortal } from "react-dom";

const reactFsLightBox = document.getElementById(
  "react-fs-lightbox"
) as HTMLElement;

let pkr = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PKR",
});

type ItemCard = {
  title: string;
  price: number;
  img: string;
  imgName: string;
};
const ItemCard = ({ title, price, img, imgName }: ItemCard): ReactElement => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="border flex justify-between hover:bg-gray-200 hover:border-black">
      <div className="flex flex-col justify-between basis-3/5">
        <h4 className="mt-4 ml-4 text-sm font-semibold">{title}</h4>
        <span className="mb-4 ml-4 text-sm">{pkr.format(price)}</span>
      </div>
      <div
        className="bg-orange-200 basis-2/5 px-10 py-2 cursor-pointer"
        onClick={() => setToggler(!toggler)}
      >
        <img src={img} alt={imgName} className="h-full w-full object-contain" />

        {createPortal(
          <FsLightbox toggler={toggler} sources={[img]} />,
          reactFsLightBox
        )}
      </div>
    </div>
  );
};

export default ItemCard;
