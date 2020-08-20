import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import honeyReducer from './honey/honeyReducer'
import userReducer from './user/userReducer'
import postReducer from './post/postReducer'



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    honey: honeyReducer,
    user: userReducer,
    post: postReducer
})

export default rootReducer