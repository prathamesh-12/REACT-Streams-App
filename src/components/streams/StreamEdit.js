import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { showStream } from '../../store/actions';

const StreamEdit = (props) => {
  console.log("OUTSIDE");
  
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[id]);

  console.log(stream)


  useEffect(() => {
    dispatch(showStream(id));
  }, [id]);

  const renderStream = () => {
    if(!stream) { return <h3>Loading ...</h3> };
    return <h3>{stream.title}</h3>
  }
  

  return <div>{renderStream()}</div>;
};

export default StreamEdit;
