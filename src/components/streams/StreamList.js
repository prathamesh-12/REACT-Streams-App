import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from "../../store/actions";

const StreamList = () => {

  const dispatch = useDispatch();
  const streams = useSelector((state) => Object.values(state.streams));
  const currentUserId = useSelector(state => state.auth.userId);
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  
  useEffect(() => {
    dispatch(fetchStreams());
  }, [])

  const renderActionButtons = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    } 
  }

  const renderList = () => {
    if(!streams.length) { return null; }
    return streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderActionButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {renderCreate()}
    </div>
  );
};

export default StreamList;
