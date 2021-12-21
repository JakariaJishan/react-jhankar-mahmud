import { createStore } from "redux";
import cartReducers from "../Reducers/Reducers";

export const store = createStore(cartReducers);