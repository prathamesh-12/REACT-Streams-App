import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { AuthReducer } from "./authReducer";
import { StreamsReducer } from "./streamsReducer";

export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    streams: StreamsReducer
})