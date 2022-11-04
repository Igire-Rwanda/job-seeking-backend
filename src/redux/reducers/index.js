import {combineReducers} from "redux";
import jobPostsReducer from "./toursReducer";




export default combineReducers({
jobPost:jobPostsReducer
   
})