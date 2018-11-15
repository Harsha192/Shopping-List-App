import axios from "axios";
import { GET_ITEMS, ADD_ITEM, ITEM_LOADING } from "./types";

export const getItems = () => dispatch => {
  // return {
  //   type: GET_ITEMS
  // };
  dispatch(itemLoading());
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};
export const addItem = item => dispatch => {
  // return {
  //   type: ADD_ITEM,
  //   payload: item
  // };
  axios.post("/api/item", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const itemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};
