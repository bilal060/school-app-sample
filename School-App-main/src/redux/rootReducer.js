import auth from "./reducers/Auth.reducer";
import global from "./reducers/Global.reducer";



import {combineReducers} from 'redux';


export default combineReducers({
    auth,
    global
    
});
