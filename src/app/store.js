import { configureStore } from "@reduxjs/toolkit";
// import postSlices from "../feetures/posts/postSlices";
// import userSlice from "../feetures/users/userSlice";
import userSlice from "../fetures/users/userSlice";
import postSlices from "../fetures/posts/postSlices";
export const store = configureStore({
    reducer:{
         posts: postSlices,
         users: userSlice,
    }
})