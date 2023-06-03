import { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const AugmentedControl = () => {
  const globalContextData = useGlobalContext();

  const [isOverFlow, setIsOverFlow] = useState<boolean>(false);
  const augmentedContainerRef = useRef<HTMLDivElement | null>(null);

  const augmentedControl = globalContextData.filteredMenuData.map((item) => {
    return (
      <li
        key={item.id}
        className="block py-3 pl-3 lg:py-4 lg:pl-4 text-sm lg:text-base"
      >
        {item.title}
      </li>
    );
  });

  useEffect(() => {
    if (
      augmentedContainerRef.current!.scrollWidth >
      augmentedContainerRef.current!.offsetWidth
    ) {
      setIsOverFlow(true);
    }
  }, []);

  return (
    <div
      className={`whitespace-nowrap overflow-x-scroll ${
        isOverFlow ? "show-scrollbar" : "scrollbar-hide"
      }`}
      ref={augmentedContainerRef}
    >
      <ul className="flex">{augmentedControl}</ul>
    </div>
  );
};

export default AugmentedControl;
