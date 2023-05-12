import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, selectMessages } from './reducers/messagesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);


  return (
    <>
      <h1>Greeting App </h1>
      {messages.content}
    </>
  );
};

export default App;