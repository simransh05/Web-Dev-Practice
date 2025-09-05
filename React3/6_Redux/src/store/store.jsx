import { createStore } from "redux";
import rootReducers from "../reducer/Reducer";

const store = createStore(rootReducers);

export default store;