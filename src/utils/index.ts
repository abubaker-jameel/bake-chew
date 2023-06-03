import { bakeAndChewMenuData } from "../constants";
const filteredCakes = bakeAndChewMenuData.filter(
  (item) => item.type === "Cake"
);

const filteredBakes = bakeAndChewMenuData.filter(
  (item) => item.type === "Bake"
);

const filteredOther = bakeAndChewMenuData.filter(
  (item) => item.type === "Other"
);
export { filteredCakes, filteredBakes, filteredOther };
