import { ReactElement } from "react";
import ItemCard from "./ItemCard";
import { useGlobalContext } from "../context";
type ItemContainerProps = {
  noOfItem: number;
  title: string;
  description: string;
};

const ItemsContainer = ({
  noOfItem,
  title,
  description,
}: ItemContainerProps): ReactElement => {
  const globalContextData = useGlobalContext();
  const cardItem = globalContextData.filteredMenuData[noOfItem].cardData.map(
    (data) => {
      return (
        <ItemCard
          key={data.id}
          title={data.title}
          price={data.price}
          img={data.img}
          imgName={data.imgName}
        />
      );
    }
  );
  return (
    <div className="pt-10">
      <h1 className="text-base lg:text-lg font-semibold">{title}</h1>
      <p className="text-sm mt-2">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(10rem,_1fr)] gap-5 pt-10">
        {cardItem}
      </div>
    </div>
  );
};

export default ItemsContainer;
