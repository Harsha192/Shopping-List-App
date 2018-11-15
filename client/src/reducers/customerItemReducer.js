import {
  GET_CUSTOMER_ITEMS,
  ADD_CUSTOMER_ITEMS,
  DELETE_CUSTOMER_ITEMS
} from "../actions/types";
import uuid from "uuid";
const initialState = {
  customerSelectedItems: [
    {
      id: uuid(),
      name: "Sunlight Soap - 75g",
      price: "LKR 55.00",
      imgURL: "http://globalfoodcity.com/wp-content/uploads/2018/01/1-18.jpg"
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER_ITEMS:
      return {
        ...state
      };
    case ADD_CUSTOMER_ITEMS:
      console.log(action.payload);
      return {
        ...state,
        customerSelectedItems: [action.payload, ...state.customerSelectedItems]
      };

    case DELETE_CUSTOMER_ITEMS:
      console.log(action.payload);
      return {
        ...state,
        customerSelectedItems: state.customerSelectedItems.filter(
          c => c._id !== action.payload
        )
      };
    default:
      return state;
  }
}
