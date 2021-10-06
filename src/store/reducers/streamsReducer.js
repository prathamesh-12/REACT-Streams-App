import _ from 'lodash';

import { ActionTypes } from "../action-types"

const INITIAL_STREAMS_STATE = {};

export const StreamsReducer = (state={}, action) => {
    switch(action.type) {
        case ActionTypes.CREATE_STREAM: 
                return { ...state, [action.payload.id]: action.payload };
        
        case ActionTypes.FETCH_STREAM: 
                return { ...state, [action.payload.id]: action.payload };
        
        case ActionTypes.SHOW_STREAM:
                return { ...state, [action.payload.id]: action.payload };

        case ActionTypes.EDIT_STREAM:
                return { ...state, [action.payload.id]: action.payload };

        case ActionTypes.DELETE_STREAM:
                return _.omit(state, action.payload);
        
        case ActionTypes.FETCH_STREAMS:
                return { ...state, ..._.mapKeys(action.payload, "id") }; 

        default: return state;
    }
}

