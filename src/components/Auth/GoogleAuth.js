import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn, signOut } from '../../store/actions';

export const GoogleAuth = () => {

    const [isSignedIn, setIsSignedIn] = useState(null);
    const auth = useRef(null);
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);

    useEffect(() => {
        window.gapi.load("client:auth2", () => {
          window.gapi.client
            .init({
              clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
              scope: "email",
            })
            .then(() => {
              auth.current = window.gapi.auth2.getAuthInstance();

              onAuthChange(auth.current.isSignedIn.get());
              auth.current.isSignedIn.listen(onAuthChange);
            });
        });
    }, [])

    const onAuthChange = (isSignedIn) => {
        setIsSignedIn(isSignedIn);
        const userID = auth.current.currentUser.get().getId();
        if(isSignedIn) {
          dispatch(signIn(userID))
        } else {
          dispatch(signOut());
        }

    };


    const onSignInClick = () => {
      auth.current.signIn();
    };

    const onSignOutClick = () => {
      auth.current.signOut();
    };

    const renderAuthButton = () => {
      const { isSignedIn, userID } = authState;
      console.log("IS SIGNED IN ", isSignedIn, userID);
      if (isSignedIn === null) {
        return null;
      } else if (isSignedIn) {
        return (
          <button onClick={onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign Out
          </button>
        );
      } else {
        return (
          <button onClick={onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign In
          </button>
        );
      }
  }
    
    return <div>{renderAuthButton()}</div>;
}