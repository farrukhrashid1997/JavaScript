import { POST_DATA } from "./postTypes"

const initialState = {
  users: [],
};

const postDataReducer = (state = initialState, action) => {
    switch(action.type){
        case POST_DATA:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default:
            return state; 
    }
}


export default postDataReducer