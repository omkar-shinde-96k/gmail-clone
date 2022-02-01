import { createStore } from "redux";

import rootReducer from "../Reducers/Reducers.js";

const store = createStore(rootReducer)

export default store;
