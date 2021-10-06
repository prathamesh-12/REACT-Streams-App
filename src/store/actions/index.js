import { ActionTypes } from "../action-types";

import { history } from '../../history';
import streamsAPI from '../../apis/streams';

export const signIn = (usedID) => {
  console.log("Called Signin");
  return {
    type: ActionTypes.SIGN_IN,
    payload: usedID
  };
};

export const signOut = () => {
    console.log("Called SignOUT")
    return {
        type: ActionTypes.SIGN_OUT
    }
}

export const createStream = (streamInput) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const { data } = await streamsAPI.post('/streams', {...streamInput, userId});
    
    dispatch({
      type: ActionTypes.CREATE_STREAM,
      payload: data
    })
    history.push("/");
  }
}

export const fetchStreams = () => {
  return async (dispatch, getState) => {
    const { data } = await streamsAPI.get('/streams');
    dispatch({
      type: ActionTypes.FETCH_STREAMS,
      payload: data
    })
  }
}

export const showStream = (id) => {
  return async (dispatch, getState) => {
    const { data } = await streamsAPI.get(`/streams/${id}`);
    dispatch({
      type: ActionTypes.SHOW_STREAM,
      payload: data
    })
  }
}


export const editStream = (id, stream) => {
  return async (dispatch, getState) => {
    const { data } = await streamsAPI.put(`/streams/${id}`, stream);
    dispatch({
      type: ActionTypes.EDIT_STREAM,
      payload: data,
    });
  };
};


export const deleteStream = (id) => {
  return async (dispatch, getState) => {
    await streamsAPI.delete(`/streams/${id}`);
    dispatch({
      type: ActionTypes.DELETE_STREAM,
      payload: id
    });
  };
};