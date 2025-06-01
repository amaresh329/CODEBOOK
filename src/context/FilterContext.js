import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";
const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitialState);

  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  function bestSeller(products){
     return products.filter(product=>product.best_seller===true);
  }

  function inStock(products){
    return products.filter(product=>product.in_stock===true);
  }

  function sort(products){
    if(state.sortBy==="lowtohigh"){
      return products.sort((a,b)=>Number(a.price)-Number(b.price));
    }
    if(state.sortBy==="hightolow"){
      return products.sort((a,b)=>Number(b.price)-Number(a.price));
    }
  }
  
  function rating(products){
    if(state.ratings==="4STARSABOVE"){
      return products.filter(product=>product.rating>=4);
    }
    if(state.ratings==="3STARSABOVE"){
      return products.filter(product=>product.rating>=4);
    }
    if(state.ratings==="2STARSABOVE"){
      return products.filter(product=>product.rating>=4);
    }
    if(state.ratings==="1STARABOVE"){
      return products.filter(product=>product.rating>=4);
    }
  }

  const filteredProductList=rating(sort(inStock(bestSeller(state.productList))));

  const value = {
    products: state.productList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
