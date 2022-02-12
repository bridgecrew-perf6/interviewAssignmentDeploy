import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store=configureStore({
    reducer:{
        task:todoSlice.reducer
    }
});
export default store;