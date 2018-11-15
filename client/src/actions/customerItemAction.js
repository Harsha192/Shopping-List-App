import {
  GET_CUSTOMER_ITEMS,
  ADD_CUSTOMER_ITEMS,
  DELETE_CUSTOMER_ITEMS
} from "./types";

export const addCustomerItem = item => {
  console.log(item);
  return {
    type: ADD_CUSTOMER_ITEMS,
    payload: item
  };
};

export const getCustomerItems = () => {
  return {
    type: GET_CUSTOMER_ITEMS
  };
};

export const deleteCustomerItem = id => {
  return {
    type: DELETE_CUSTOMER_ITEMS,
    payload: id
  };
};
