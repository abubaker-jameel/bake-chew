import { ReactNode, createContext, useReducer, useContext } from "react";
import menuReducer from "./reducer";
import { filteredCakes, filteredBakes, filteredOther } from "./utils";

type AppGlobalContext = {
  itemTitle: string;
  filteredMenuData: {
    id: number;
    noOfItem: number;
    title: string;
    description: string;
    type: string;
    cardData: {
      id: number;
      title: string;
      price: number;
      img: string;
      imgName: string;
    }[];
  }[];
  handleCakeMenuDispatch?: () => void;
  handleBakeMenuDispatch?: () => void;
  handleOtherMenuDispatch?: () => void;
};
const AppContext = createContext<AppGlobalContext>({
  itemTitle: "Cake Menu",
  filteredMenuData: filteredCakes,
});

type AppProviderProps = {
  children: ReactNode;
};

export type InitialState = {
  itemTitle: string;
  filteredMenuData: {
    id: number;
    noOfItem: number;
    title: string;
    description: string;
    type: string;
    cardData: {
      id: number;
      title: string;
      price: number;
      img: string;
      imgName: string;
    }[];
  }[];
};

export enum ACTION_TYPES {
  "CAKE MENU" = "CAKE MENU",
  "BAKE MENU" = "BAKE MENU",
  "OTHER MENU" = "OTHER MENU",
}

export type ActionType = {
  type: ACTION_TYPES;
  payload: {
    itemTitle: string;
    filteredMenuData: {
      id: number;
      noOfItem: number;
      title: string;
      description: string;
      type: string;
      cardData: {
        id: number;
        title: string;
        price: number;
        img: string;
        imgName: string;
      }[];
    }[];
  };
};

const initialState: InitialState = {
  itemTitle: "Cake Menu",
  filteredMenuData: filteredCakes,
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  const handleCakeMenuDispatch = () => {
    return dispatch({
      type: ACTION_TYPES["CAKE MENU"],
      payload: {
        itemTitle: "Cake Menu",
        filteredMenuData: filteredCakes,
      },
    });
  };
  const handleBakeMenuDispatch = () => {
    return dispatch({
      type: ACTION_TYPES["BAKE MENU"],
      payload: {
        itemTitle: "Bake Menu",
        filteredMenuData: filteredBakes,
      },
    });
  };
  const handleOtherMenuDispatch = () => {
    return dispatch({
      type: ACTION_TYPES["OTHER MENU"],
      payload: {
        itemTitle: "Other Menu",
        filteredMenuData: filteredOther,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleCakeMenuDispatch,
        handleBakeMenuDispatch,
        handleOtherMenuDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useGlobalContext };
