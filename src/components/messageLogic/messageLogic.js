import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getResultItem } from '../../redux/message/messageSlice';

const GreetingLogic = () => {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(getResultItem());
  }, []);

  if (isLoading) {
    return <div>Content is loading...</div>;
  }

  if (error) {
    return <div>Content Error! Something went wrong!</div>;
  }

  return (
    <div>
      <h2>Greeting</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default GreetingLogic;
