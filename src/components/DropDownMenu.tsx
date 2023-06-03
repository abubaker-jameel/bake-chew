import { ReactElement } from "react";
import { dropDownIcon } from "../assets";
import { dropDownMenuItems } from "../constants";
import { useGlobalContext } from "../context";

type DropDownProps = {
  itemTitle: string;
  isActive: boolean;
  handleOnItemActive: () => void;
  handleDropDownActivate: () => void;
};

const DropDownMenu = ({
  itemTitle,
  isActive,
  handleOnItemActive,
  handleDropDownActivate,
}: DropDownProps): ReactElement => {
  const globalContextData = useGlobalContext();
  const menuItem = dropDownMenuItems.map((item) => {
    return (
      <li
        key={item.id}
        className={`block py-3 pl-3 lg:py-4 lg:pl-4 text-sm lg:text-base hover:bg-amber-200 cursor-pointer`}
        onClick={() => {
          handleOnItemActive();
          if (item.id === 1) {
            return globalContextData.handleCakeMenuDispatch!();
          }
          if (item.id === 2) {
            return globalContextData.handleBakeMenuDispatch!();
          }
          if (item.id === 3) {
            return globalContextData.handleOtherMenuDispatch!();
          }
        }}
      >
        {item.title}
      </li>
    );
  });
  return (
    <div className="min-w-[8rem] md:min-w-[9rem] lg:min-w-[15rem] relative bg-white">
      <div
        className="flex items-center justify-between"
        onClick={handleDropDownActivate}
      >
        <span className="block py-3 pl-3 lg:py-4 lg:pl-4 text-sm lg:text-base">
          {itemTitle}
        </span>
        <img
          src={dropDownIcon}
          alt="dropDownIcon"
          className="h-3 w-3 mr-1 justify-end"
        />
      </div>
      {isActive && (
        <ul className="divide-y divide-yellow-400 absolute left-0 right-0 bg-white shadow-lg">
          {menuItem}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
