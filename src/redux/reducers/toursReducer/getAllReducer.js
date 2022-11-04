import {
  GET_ALL_JOBPOSTED_SUCCESS,
  GET_ALL_JOBPOSTED_FAILED,
} from "../../actions/actionTypes";

const reducer =(state={},action)=>{
    switch(action.type){
        case GET_ALL_JOBPOSTED_SUCCESS:
            return {
                ...state,jobPosts:action.payload
            };
            case GET_ALL_JOBPOSTED_FAILED:
                return {
                    ...state,jobPostError:action.payload
                };
                default:
                    return state

    }
}
export default reducer