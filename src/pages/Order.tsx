import { useState, ReactElement } from "react";
import DropDownMenu from "../components/DropDownMenu";
import ItemsContainer from "../components/ItemsContainer";
import { useGlobalContext } from "../context";
import SubscribeToNewsLetter from "../components/SubscribeToNewsLetter";
import AugmentedControl from "../components/AugmentedControl";
import UnderLay from "../components/UnderLay";

const Order = (): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const globalContextData = useGlobalContext();

  const itemContainer = globalContextData.filteredMenuData.map((item) => {
    return (
      <ItemsContainer
        key={item.id}
        noOfItem={item.noOfItem}
        title={item.title}
        description={item.description}
      />
    );
  });

  const handleDropDownActive = (): void => {
    setIsActive((prevState) => !prevState);
  };

  const handleOnItemActive = (): void => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <>
      <UnderLay title="order" />
      <section className="container">
        <div className="flex border-b border-black/20 sticky top-14 bg-white">
          <DropDownMenu
            itemTitle={globalContextData.itemTitle}
            isActive={isActive}
            handleDropDownActivate={handleDropDownActive}
            handleOnItemActive={handleOnItemActive}
          />
          <span className="border-r border-black/20 my-3 ml-4"></span>
          <AugmentedControl />
        </div>
        <div className="pt-5">
          <h1 className="text-xl lg:text-2xl font-bold">
            {globalContextData.itemTitle}
          </h1>
          <span className="text-sm mt-5">Served daily between 12-5pm</span>
        </div>
        {itemContainer}
      </section>
      <SubscribeToNewsLetter
        title="Subscribe to My NewsLetter"
        inputPlaceHolder="Enter your email here"
      />
    </>
  );
};

export default Order;
