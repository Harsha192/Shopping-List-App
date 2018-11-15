import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, ITEM_LOADING } from "../actions/types";
const initialState = {
  items: [
    {
      _id: uuid(),
      name: "Milk - 1L bottle",
      price: "LKR 375.00",
      imgURL:
        "https://www.anchormilk.com/wp-content/uploads/2016/08/anchor-milk.png"
    },
    {
      _id: uuid(),
      name: "Rice - 1kg",
      price: "LKR 75.00",
      imgURL:
        "http://www.ehorana.com/product_image/NIPUNA-SAMBA-RAW-5KG1450351931.jpg"
    },
    {
      _id: uuid(),
      name: "Sugar - 1kg",
      price: "LKR 120.00",
      imgURL:
        "https://www.kapruka.com/shops/specialGifts/productImages/CS71356.jpg"
    },
    {
      _id: uuid(),
      name: "Butter - 500g",
      price: "LKR 530.00",
      imgURL: "http://globalfoodcity.com/wp-content/uploads/2018/02/32-2.jpg"
    },
    {
      _id: uuid(),
      name: "Dhal - 1kg",
      price: "LKR 105.00",
      imgURL:
        "https://www.kapruka.com/shops/specialGifts/productImages/CS71347.jpg"
    },
    {
      _id: uuid(),
      name: "Sunlight Soap - 75g",
      price: "LKR 55.00",
      imgURL: "http://globalfoodcity.com/wp-content/uploads/2018/01/1-18.jpg"
    }
  ],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      console.log([...action.payload, ...state.items]);
      return {
        ...state,
        items: [...action.payload, ...state.items],
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
