import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer  from "./userSlice"
import movieReducer from './movieSlice'

const appStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
            movies: movieReducer
        }
    }
)

export default appStore;