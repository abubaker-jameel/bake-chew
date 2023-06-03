import { InitialState, ActionType, ACTION_TYPES } from "./context";

const menuReducer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case ACTION_TYPES["CAKE MENU"]:
      return {
        ...state,
        itemTitle: action.payload.itemTitle,
        filteredMenuData: action.payload.filteredMenuData,
      };
    case ACTION_TYPES["BAKE MENU"]:
      return {
        ...state,
        itemTitle: action.payload.itemTitle,
        filteredMenuData: action.payload.filteredMenuData,
      };
    case ACTION_TYPES["OTHER MENU"]:
      return {
        ...state,
        itemTitle: action.payload.itemTitle,
        filteredMenuData: action.payload.filteredMenuData,
      };
    default:
      return state;
  }
};

export default menuReducer;
